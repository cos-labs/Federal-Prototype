define('ember-validations/mixin', ['exports', 'ember', 'ember-validations/errors', 'ember-validations/validators/base'], function (exports, _ember, _emberValidationsErrors, _emberValidationsValidatorsBase) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  var setValidityMixin = _ember['default'].Mixin.create({
    isValid: _ember['default'].computed('validators.@each.isValid', function () {
      var compactValidators = get(this, 'validators').compact();
      var filteredValidators = compactValidators.filter(function (validator) {
        return !get(validator, 'isValid');
      });

      return get(filteredValidators, 'length') === 0;
    }),
    isInvalid: _ember['default'].computed.not('isValid')
  });

  var pushValidatableObject = function pushValidatableObject(model, property) {
    var content = get(model, property);

    model.removeObserver(property, pushValidatableObject);
    if (_ember['default'].isArray(content)) {
      model.validators.pushObject(ArrayValidatorProxy.create({ model: model, property: property, contentBinding: 'model.' + property }));
    } else {
      model.validators.pushObject(content);
    }
  };

  var lookupValidator = function lookupValidator(validatorName) {
    var container = get(this, 'container');
    var service = container.lookup('service:validations');
    var validators = [];
    var cache;

    if (service) {
      cache = get(service, 'cache');
    } else {
      cache = {};
    }

    if (cache[validatorName]) {
      validators = validators.concat(cache[validatorName]);
    } else {
      var local = container.lookupFactory('validator:local/' + validatorName);
      var remote = container.lookupFactory('validator:remote/' + validatorName);

      if (local || remote) {
        validators = validators.concat([local, remote]);
      } else {
        var base = container.lookupFactory('validator:' + validatorName);

        if (base) {
          validators = validators.concat([base]);
        } else {
          local = container.lookupFactory('ember-validations@validator:local/' + validatorName);
          remote = container.lookupFactory('ember-validations@validator:remote/' + validatorName);

          if (local || remote) {
            validators = validators.concat([local, remote]);
          }
        }
      }

      cache[validatorName] = validators;
    }

    if (_ember['default'].isEmpty(validators)) {
      _ember['default'].warn('Could not find the "' + validatorName + '" validator.');
    }

    return validators;
  };

  var ArrayValidatorProxy = _ember['default'].ArrayProxy.extend(setValidityMixin, {
    validate: function validate() {
      return this._validate();
    },
    _validate: _ember['default'].on('init', function () {
      var promises = get(this, 'content').invoke('_validate').without(undefined);
      return _ember['default'].RSVP.all(promises);
    }),
    validators: _ember['default'].computed.alias('content')
  });

  exports['default'] = _ember['default'].Mixin.create(setValidityMixin, {
    init: function init() {
      this._super();
      this.errors = _emberValidationsErrors['default'].create();
      this.dependentValidationKeys = {};
      this.validators = _ember['default'].A();
      if (get(this, 'validations') === undefined) {
        this.validations = {};
      }
      this.buildValidators();
      this.validators.forEach(function (validator) {
        validator.addObserver('errors.[]', this, function (sender) {
          var errors = _ember['default'].A();
          this.validators.forEach(function (validator) {
            if (validator.property === sender.property) {
              errors.addObjects(validator.errors);
            }
          }, this);
          set(this, 'errors.' + sender.property, errors);
        });
      }, this);
    },
    buildValidators: function buildValidators() {
      var property;

      for (property in this.validations) {
        if (this.validations[property].constructor === Object) {
          this.buildRuleValidator(property);
        } else {
          this.buildObjectValidator(property);
        }
      }
    },
    buildRuleValidator: function buildRuleValidator(property) {
      var pushValidator = function pushValidator(validator) {
        if (validator) {
          this.validators.pushObject(validator.create({ model: this, property: property, options: this.validations[property][validatorName] }));
        }
      };

      if (this.validations[property].callback) {
        this.validations[property] = { inline: this.validations[property] };
      }

      var createInlineClass = function createInlineClass(callback) {
        return _emberValidationsValidatorsBase['default'].extend({
          call: function call() {
            var errorMessage = this.callback.call(this);

            if (errorMessage) {
              this.errors.pushObject(errorMessage);
            }
          },
          callback: callback
        });
      };

      for (var validatorName in this.validations[property]) {
        if (validatorName === 'inline') {
          pushValidator.call(this, createInlineClass(this.validations[property][validatorName].callback));
        } else if (this.validations[property].hasOwnProperty(validatorName)) {
          lookupValidator.call(this, validatorName).forEach(pushValidator, this);
        }
      }
    },
    buildObjectValidator: function buildObjectValidator(property) {
      if (_ember['default'].isNone(get(this, property))) {
        this.addObserver(property, this, pushValidatableObject);
      } else {
        pushValidatableObject(this, property);
      }
    },
    validate: function validate() {
      var self = this;
      return this._validate().then(function (vals) {
        var errors = get(self, 'errors');
        if (vals.indexOf(false) > -1) {
          return _ember['default'].RSVP.reject(errors);
        }
        return errors;
      });
    },
    _validate: _ember['default'].on('init', function () {
      var promises = this.validators.invoke('_validate').without(undefined);
      return _ember['default'].RSVP.all(promises);
    })
  });
});