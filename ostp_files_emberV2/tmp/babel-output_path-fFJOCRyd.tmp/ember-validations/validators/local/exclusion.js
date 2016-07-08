define('ember-validations/validators/local/exclusion', ['exports', 'ember', 'ember-validations/validators/base', 'ember-validations/messages'], function (exports, _ember, _emberValidationsValidatorsBase, _emberValidationsMessages) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  exports['default'] = _emberValidationsValidatorsBase['default'].extend({
    init: function init() {
      this._super();
      if (this.options.constructor === Array) {
        set(this, 'options', { 'in': this.options });
      }

      if (this.options.message === undefined) {
        set(this, 'options.message', _emberValidationsMessages['default'].render('exclusion', this.options));
      }
    },
    call: function call() {
      /*jshint expr:true*/
      var lower, upper;

      if (_ember['default'].isEmpty(get(this.model, this.property))) {
        if (this.options.allowBlank === undefined) {
          this.errors.pushObject(this.options.message);
        }
      } else if (this.options['in']) {
        if (_ember['default'].$.inArray(get(this.model, this.property), this.options['in']) !== -1) {
          this.errors.pushObject(this.options.message);
        }
      } else if (this.options.range) {
        lower = this.options.range[0];
        upper = this.options.range[1];

        if (get(this.model, this.property) >= lower && get(this.model, this.property) <= upper) {
          this.errors.pushObject(this.options.message);
        }
      }
    }
  });
});