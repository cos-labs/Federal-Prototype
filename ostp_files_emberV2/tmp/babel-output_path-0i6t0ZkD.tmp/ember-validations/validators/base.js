define('ember-validations/validators/base', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Object.extend({
    init: function init() {
      set(this, 'errors', _ember['default'].A());
      this.dependentValidationKeys = _ember['default'].A();
      this.conditionals = {
        'if': get(this, 'options.if'),
        unless: get(this, 'options.unless')
      };
      this.model.addObserver(this.property, this, this._validate);
    },
    addObserversForDependentValidationKeys: _ember['default'].on('init', function () {
      this.dependentValidationKeys.forEach(function (key) {
        this.model.addObserver(key, this, this._validate);
      }, this);
    }),
    pushDependentValidationKeyToModel: _ember['default'].on('init', function () {
      var model = get(this, 'model');
      if (model.dependentValidationKeys[this.property] === undefined) {
        model.dependentValidationKeys[this.property] = _ember['default'].A();
      }
      model.dependentValidationKeys[this.property].addObjects(this.dependentValidationKeys);
    }),
    call: function call() {
      throw 'Not implemented!';
    },
    unknownProperty: function unknownProperty(key) {
      var model = get(this, 'model');
      if (model) {
        return get(model, key);
      }
    },
    isValid: _ember['default'].computed.empty('errors.[]'),
    isInvalid: _ember['default'].computed.not('isValid'),
    validate: function validate() {
      var self = this;
      return this._validate().then(function (success) {
        // Convert validation failures to rejects.
        var errors = get(self, 'model.errors');
        if (success) {
          return errors;
        } else {
          return _ember['default'].RSVP.reject(errors);
        }
      });
    },
    _validate: _ember['default'].on('init', function () {
      this.errors.clear();
      if (this.canValidate()) {
        this.call();
      }
      if (get(this, 'isValid')) {
        return _ember['default'].RSVP.resolve(true);
      } else {
        return _ember['default'].RSVP.resolve(false);
      }
    }),
    canValidate: function canValidate() {
      if (typeof this.conditionals === 'object') {
        if (this.conditionals['if']) {
          if (typeof this.conditionals['if'] === 'function') {
            return this.conditionals['if'](this.model, this.property);
          } else if (typeof this.conditionals['if'] === 'string') {
            if (typeof this.model[this.conditionals['if']] === 'function') {
              return this.model[this.conditionals['if']]();
            } else {
              return get(this.model, this.conditionals['if']);
            }
          }
        } else if (this.conditionals.unless) {
          if (typeof this.conditionals.unless === 'function') {
            return !this.conditionals.unless(this.model, this.property);
          } else if (typeof this.conditionals.unless === 'string') {
            if (typeof this.model[this.conditionals.unless] === 'function') {
              return !this.model[this.conditionals.unless]();
            } else {
              return !get(this.model, this.conditionals.unless);
            }
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    compare: function compare(a, b, operator) {
      switch (operator) {
        case '==':
          return a == b; // jshint ignore:line
        case '===':
          return a === b;
        case '>=':
          return a >= b;
        case '<=':
          return a <= b;
        case '>':
          return a > b;
        case '<':
          return a < b;
        default:
          return false;
      }
    }
  });
});