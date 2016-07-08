define('ember-cp-validations/validators/collection', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var isArray = _ember['default'].isArray;

  /**
   *  If `true` validates that the given value is a valid collection and will add `<ATTRIUTE>.[]` as a dependent key to the CP.
   *  If `false`, validates that the given value is singular. Use this validator if you want validation to occur when the content of your collection changes.
   *
   *  ```javascript
   *  // Examples
   *  validator('collection', true)
   *  validator('collection', false)
   *  validator('collection', {
   *    collection: true,
   *    message: 'must be a collection'
   *  })
   *  ```
   *
   *  @class Collection
   *  @module Validators
   *  @extends Base
   */
  var Collection = _emberCpValidationsValidatorsBase['default'].extend({

    /**
     * Normalized options passed in.
     * ```js
     * validator('collection', true)
     * // Becomes
     * validator('collection', {
     *   collection: true
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
          collection: options
        };
      }
      return this._super(opts, defaultOptions, globalOptions);
    },

    validate: function validate(value, options) {
      if (options.collection === true && !isArray(value)) {
        return this.createErrorMessage('collection', value, options);
      }

      if (options.collection === false && isArray(value)) {
        return this.createErrorMessage('singular', value, options);
      }

      return true;
    }
  });

  Collection.reopenClass({
    getDependentsFor: function getDependentsFor(attribute, options) {
      return options === true || options.collection === true ? ['_model.' + attribute + '.[]'] : [];
    }
  });

  exports['default'] = Collection;
});