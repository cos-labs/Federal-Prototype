define('ember-cp-validations/utils/assign', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = assign;

  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  /**
   * Assigns a value to an object via the given path while creating new objects if
   * the pathing requires it. If the given path is `foo.bar`, it will create a new object (obj.foo)
   * and assign value to obj.foo.bar. If the given object is an Ember.Object, it will create new Ember.Objects.
   */

  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var isNone = _ember['default'].isNone;
  var defineProperty = _ember['default'].defineProperty;

  function assign(obj, path, value) {
    var useEmberObject = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
    var delimiter = arguments.length <= 4 || arguments[4] === undefined ? '.' : arguments[4];

    var keyPath = path.split(delimiter);
    var lastKeyIndex = keyPath.length - 1;
    var currObj = obj;

    // Iterate over each key in the path (minus the last one which is the property to be assigned)
    for (var i = 0; i < lastKeyIndex; ++i) {
      var key = keyPath[i];

      // Create a new object if it doesnt exist
      if (isNone(get(currObj, key))) {
        set(currObj, key, useEmberObject ? _ember['default'].Object.create() : {});
      }
      currObj = get(currObj, key);
    }

    if (value instanceof _ember['default'].ComputedProperty) {
      defineProperty(currObj, keyPath[lastKeyIndex], value);
    } else {
      set(currObj, keyPath[lastKeyIndex], value);
    }
  }
});