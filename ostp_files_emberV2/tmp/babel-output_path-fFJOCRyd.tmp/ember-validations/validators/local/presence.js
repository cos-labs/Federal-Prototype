define('ember-validations/validators/local/presence', ['exports', 'ember', 'ember-validations/validators/base', 'ember-validations/messages'], function (exports, _ember, _emberValidationsValidatorsBase, _emberValidationsMessages) {
  'use strict';

  var get = _ember['default'].get;

  exports['default'] = _emberValidationsValidatorsBase['default'].extend({
    init: function init() {
      this._super();
      /*jshint expr:true*/
      if (this.options === true) {
        this.options = {};
      }

      if (this.options.message === undefined) {
        this.options.message = _emberValidationsMessages['default'].render('blank', this.options);
      }
    },
    call: function call() {
      if (_ember['default'].isBlank(get(this.model, this.property))) {
        this.errors.pushObject(this.options.message);
      }
    }
  });
});