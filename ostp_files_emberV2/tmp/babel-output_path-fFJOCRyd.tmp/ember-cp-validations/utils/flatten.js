define("ember-cp-validations/utils/flatten", ["exports"], function (exports) {
  "use strict";

  exports["default"] = flatten;

  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  function flatten() {
    var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    var result = [];

    for (var i = 0, l = array.length; i < l; i++) {
      var item = array[i];

      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item);
      }
    }

    return result;
  }
});