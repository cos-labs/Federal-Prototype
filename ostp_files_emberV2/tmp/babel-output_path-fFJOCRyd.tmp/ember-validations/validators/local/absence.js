define('ember-validations/validators/local/absence', ['exports', 'ember', 'ember-validations/validators/base', 'ember-validations/messages'], function (exports, _ember, _emberValidationsValidatorsBase, _emberValidationsMessages) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  exports['default'] = _emberValidationsValidatorsBase['default'].extend({
    init: function init() {
      this._super();
      /*jshint expr:true*/
      if (this.options === true) {
        set(this, 'options', {});
      }

      if (this.options.message === undefined) {
        set(this, 'options.message', _emberValidationsMessages['default'].render('present', this.options));
      }
    },
    call: function call() {
      if (!_ember['default'].isEmpty(get(this.model, this.property))) {
        this.errors.pushObject(this.options.message);
      }
    }
  });
});