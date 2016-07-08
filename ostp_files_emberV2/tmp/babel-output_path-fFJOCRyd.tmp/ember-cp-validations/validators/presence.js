define('ember-cp-validations/validators/presence', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isEmpty = _ember['default'].isEmpty;
  var isPresent = _ember['default'].isPresent;

  /**
   *  If `true` validates that the given value is not empty, if `false`, validates that the given value is empty.
   *
   *   #### Options
   *  - `ignoreBlank` (**Boolean**): If true, treats an empty or whitespace string as not present
   *
   *  ```javascript
   *  // Examples
   *  validator('presence', true)
   *  validator('presence', false)
   *  validator('presence', {
   *    presence: true,
   *    message: 'should not be empty'
   *  })
   *
   *  validator('presence', {
   *  	presence: true,
   *    ignoreBlank: true,
   *    message: 'should not be empty or consist only of spaces'
   *  })
   *  ```
   *
   *  @class Presence
   *  @module Validators
   *  @extends Base
   */
  exports['default'] = _emberCpValidationsValidatorsBase['default'].extend({

    /**
     * Normalized options passed in.
     * ```js
     * validator('presence', true)
     * // Becomes
     * validator('presence', {
     *   presence: true
     * })
     * ```
     *
     * @method buildOptions
     * @param  {Object}     options
     * @param  {Object}     defaultOptions
     * @param  {Object}     globalOptions
     * @return {Object}
     */
    buildOptions: function buildOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var defaultOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var globalOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var opts = options;

      if (typeof options === 'boolean') {
        opts = {
          presence: options
        };
      }
      return this._super(opts, defaultOptions, globalOptions);
    },

    validate: function validate(value, options) {
      var presence = options.presence;
      var ignoreBlank = options.ignoreBlank;

      if (presence === true && !this._isPresent(value, ignoreBlank)) {
        return this.createErrorMessage('blank', value, options);
      }

      if (presence === false && this._isPresent(value, ignoreBlank)) {
        return this.createErrorMessage('present', value, options);
      }

      return true;
    },

    /**
     * Handle presence of ember proxy based instances
     */
    _isPresent: function _isPresent(value) {
      var ignoreBlank = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (value instanceof _ember['default'].ObjectProxy || value instanceof _ember['default'].ArrayProxy) {
        return this._isPresent(get(value, 'content'), ignoreBlank);
      }

      if (ignoreBlank) {
        return isPresent(value);
      } else {
        return !isEmpty(value);
      }
    }
  });
});