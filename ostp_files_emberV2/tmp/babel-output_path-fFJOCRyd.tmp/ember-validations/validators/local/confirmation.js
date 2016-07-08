define('ember-validations/validators/local/confirmation', ['exports', 'ember', 'ember-validations/validators/base', 'ember-validations/messages'], function (exports, _ember, _emberValidationsValidatorsBase, _emberValidationsMessages) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  exports['default'] = _emberValidationsValidatorsBase['default'].extend({
    init: function init() {
      this.originalProperty = this.property;
      this.property = this.property + 'Confirmation';
      this._super();
      this.dependentValidationKeys.pushObject(this.originalProperty);
      /*jshint expr:true*/
      if (this.options === true) {
        set(this, 'options', { attribute: this.originalProperty });
        set(this, 'options', { message: _emberValidationsMessages['default'].render('confirmation', this.options) });
      }
    },
    call: function call() {
      var original = get(this.model, this.originalProperty);
      var confirmation = get(this.model, this.property);

      if (!_ember['default'].isEmpty(original) || !_ember['default'].isEmpty(confirmation)) {
        if (original !== confirmation) {
          this.errors.pushObject(this.options.message);
        }
      }
    }
  });
});