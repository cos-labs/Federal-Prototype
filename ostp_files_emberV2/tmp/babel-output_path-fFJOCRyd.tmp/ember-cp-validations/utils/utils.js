define('ember-cp-validations/utils/utils', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.hasEmberData = hasEmberData;
  exports.unwrapString = unwrapString;

  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  function hasEmberData() {
    return typeof self.DS !== 'undefined';
  }

  function unwrapString(input) {
    if (input && input instanceof _ember['default'].Handlebars.SafeString) {
      return input.toString();
    }

    return input;
  }
});