define('ember-validations/validators/local/acceptance', ['exports', 'ember', 'ember-validations/validators/base', 'ember-validations/messages'], function (exports, _ember, _emberValidationsValidatorsBase, _emberValidationsMessages) {
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
        set(this, 'options.message', _emberValidationsMessages['default'].render('accepted', this.options));
      }
    },
    call: function call() {
      if (this.options.accept) {
        if (get(this.model, this.property) !== this.options.accept) {
          this.errors.pushObject(this.options.message);
        }
      } else if (get(this.model, this.property) !== '1' && get(this.model, this.property) !== 1 && get(this.model, this.property) !== true) {
        this.errors.pushObject(this.options.message);
      }
    }
  });
});