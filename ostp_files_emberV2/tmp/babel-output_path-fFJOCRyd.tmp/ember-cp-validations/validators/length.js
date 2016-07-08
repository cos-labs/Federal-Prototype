define('ember-cp-validations/validators/length', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isNone = _ember['default'].isNone;
  var isEmpty = _ember['default'].isEmpty;

  /**
   *  Validates the length of the attributes’ values.
   *
   *   #### Options
   *  - `allowNone` (**Boolean**): If true, skips validation if the value is null or undefined. __Default: true__
   *  - `allowBlank` (**Boolean**): If true, skips validation if the value is empty
   *  - `is` (**Number**): The exact length the value can be
   *  - `min` (**Number**): The minimum length the value can be
   *  - `max` (**Number**): The maximum length the value can be
   *
   *  ```javascript
   *  // Examples
   *  validator('length', {
   *    is: 15
   *  })
   *  validator('length', {
   *      min: 5,
   *      max: 10
   *  })
   *  ```
   *
   *  @class Length
   *  @module Validators
   *  @extends Base
   */
  exports['default'] = _emberCpValidationsValidatorsBase['default'].extend({
    /**
     * Default allowNone to true
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

      options.allowNone = isNone(options.allowNone) ? true : options.allowNone;

      return this._super(options, defaultOptions, globalOptions);
    },

    validate: function validate(value, options) {
      if (isEmpty(Object.keys(options))) {
        return true;
      }

      if (isNone(value)) {
        return options.allowNone ? true : this.createErrorMessage('invalid', value, options);
      }

      if (options.allowBlank && isEmpty(value)) {
        return true;
      }

      if (!isNone(options.is) && options.is !== get(value, 'length')) {
        return this.createErrorMessage('wrongLength', value, options);
      }

      if (!isNone(options.min) && options.min > get(value, 'length')) {
        return this.createErrorMessage('tooShort', value, options);
      }

      if (!isNone(options.max) && options.max < get(value, 'length')) {
        return this.createErrorMessage('tooLong', value, options);
      }

      return true;
    }
  });
});