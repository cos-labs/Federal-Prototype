define("ember-cp-validations/utils/should-call-super", ["exports"], function (exports) {
  "use strict";

  exports["default"] = shouldCallSuper;

  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  /**
   * Checks if the give key exists on the object's super.
   * If so, we can successfuly call the obj[key] _super
   *
   * Created by @rwjblue
   */
  function shouldCallSuper(obj, key) {
    var current = Object.getPrototypeOf(obj);
    current = Object.getPrototypeOf(current);

    while (current) {
      var descriptor = Object.getOwnPropertyDescriptor(current, key);

      if (descriptor) {
        return true;
      }

      current = Object.getPrototypeOf(current);
    }

    return false;
  }
});