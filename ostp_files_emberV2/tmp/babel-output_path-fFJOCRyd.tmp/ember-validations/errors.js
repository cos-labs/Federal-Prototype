define('ember-validations/errors', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var get = _ember['default'].get;
  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Object.extend({
    unknownProperty: function unknownProperty(property) {
      set(this, property, _ember['default'].A());
      return get(this, property);
    }
  });
});