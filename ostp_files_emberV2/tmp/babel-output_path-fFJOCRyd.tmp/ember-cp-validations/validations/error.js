define('ember-cp-validations/validations/error', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module Validations
   * @class Error
   */

  exports['default'] = _ember['default'].Object.extend({

    /**
     * The attribute that the error belongs to
     * @property attribute
     * @type {String}
     */
    attribute: null,

    /**
     * The parent attribute that the error belongs to
     * @property parentAttribute
     * @type {String}
     */
    parentAttribute: null,

    /**
     * The error message
     * @property message
     * @type {String}
     */
    message: null
  });
});