define('ember-cp-validations/validators/alias', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isEmpty = _ember['default'].isEmpty;

  /**
   *  Creates an alias between a single attribute's validations to another.
   *  This copies all messages, errors, etc., to the current attribute as well as
   *  its validation state (isValid, isValidating, etc.)
   *
   *   #### Options
   *  - `firstMessageOnly` (**Boolean**): If true, only returns the first error message of the
   *  aliased attribute and will not include validation state
   *
   *  ```javascript
   *  // Examples
   *  validator('alias', 'attribute')
   *  validator('alias', {
   *    alias: 'attribute',
   *    firstMessageOnly: true
   *  })
   *  ```
   *
   *  @class Alias
   *  @module Validators
   *  @extends Base
   */
  var Alias = _emberCpValidationsValidatorsBase['default'].extend({

    /**
     * Normalized options passed in.
     * ```js
     * validator('alias', 'attribute')
     * // Becomes
     * validator('alias', {
     *   alias: 'attribute'
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

      if (typeof options === 'string') {
        opts = {
          alias: options
        };
      }
      return this._super(opts, defaultOptions, globalOptions);
    },

    validate: function validate(value, options, model) {
      var alias = options.alias;
      var firstMessageOnly = options.firstMessageOnly;

      if (isEmpty(alias)) {
        return true;
      }

      var aliasValidation = get(model, 'validations.attrs.' + alias);

      return firstMessageOnly ? get(aliasValidation, 'message') : get(aliasValidation, 'content');
    }
  });

  Alias.reopenClass({
    getDependentsFor: function getDependentsFor(attribute, options) {
      var alias = typeof options === 'string' ? options : options.alias;
      return [alias + '.messages.[]', alias + '.isTruelyValid'];
    }
  });

  exports['default'] = Alias;
});