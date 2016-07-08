define('ember-cp-validations/validators/date', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var moment = (self.requirejs.entries.moment || self.requirejs.entries['moment/index']) && self.require('moment')['default'];

  if (typeof moment === 'undefined') {
    throw new Error('MomentJS is required to use the Date validator. The easiest way to install moment.js is to install ember-moment.\n' + 'Installation instructions and documentation can be found at https://github.com/stefanpenner/ember-moment');
  }

  var isNone = _ember['default'].isNone;
  var isEmpty = _ember['default'].isEmpty;

  /**
   *  Validate over a date range. Uses [MomentJS](http://momentjs.com/) for date mathematics and calculations.
   *
   *  -*Note**: MomentJS must be installed to be able to use this validator. The easiest way to do this is to install [ember-moment](https://github.com/stefanpenner/ember-moment)
   *
   *   #### Options
   *  - `allowBlank` (**Boolean**): If true, skips validation if the value is empty
   *  - `before` (**String**): The specified date must be before this date
   *  - `onOrBefore` (**String**): The specified date must be on or before this date
   *  - `after` (**String**): The specified date must be after this date
   *  - `onOrAfter` (**String**): The specified date must be on or after this date
   *  - `precision` (**String**): Limit the comparison check to a specific granularity. Options: year, month, week, day, hour, minute, second.
   *  - `format` (**String**): Input value date format
   *  - `errorFormat` (**String**): Error output date format. Defaults to `MMM Do, YYYY`
   *
   *  ```javascript
   *  // Example
   *  validator('date', {
   *      after: 'now',
   *      before: '1/1/2020',
   *      precision: 'day',
   *      format: 'M/D/YYY',
   *      errorFormat: 'M/D/YYY'
   *  })
   *  // If before, onOrBefore, after, or onOrAfter is set to 'now', the value given to the validator will be tested against the current date and time.
   *  ```
   *
   *  @class Date
   *  @module Validators
   *  @extends Base
   */
  exports['default'] = _emberCpValidationsValidatorsBase['default'].extend({

    _parseDate: function _parseDate(date, format) {
      var useStrict = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      if (date === 'now' || isEmpty(date)) {
        return moment();
      }

      return isNone(format) ? moment(new Date(date)) : moment(date, format, useStrict);
    },

    validate: function validate(value, options) {
      var errorFormat = options.errorFormat || 'MMM Do, YYYY';
      var format = options.format;
      var precision = options.precision;
      var before = options.before;
      var onOrBefore = options.onOrBefore;
      var after = options.after;
      var onOrAfter = options.onOrAfter;

      if (options.allowBlank && isEmpty(value)) {
        return true;
      }

      var date = this._parseDate(value);

      if (!date.isValid()) {
        return this.createErrorMessage('date', value, options);
      }

      if (format) {
        date = this._parseDate(value, format, true);
        if (!date.isValid()) {
          return this.createErrorMessage('wrongDateFormat', value, options);
        }
      }

      if (before) {
        before = this._parseDate(before, format);
        if (!date.isBefore(before, precision)) {
          options.before = before.format(errorFormat);
          return this.createErrorMessage('before', value, options);
        }
      }

      if (onOrBefore) {
        onOrBefore = this._parseDate(onOrBefore, format);
        if (!date.isSameOrBefore(onOrBefore, precision)) {
          options.onOrBefore = onOrBefore.format(errorFormat);
          return this.createErrorMessage('onOrBefore', value, options);
        }
      }

      if (after) {
        after = this._parseDate(after, format);
        if (!date.isAfter(after, precision)) {
          options.after = after.format(errorFormat);
          return this.createErrorMessage('after', value, options);
        }
      }

      if (onOrAfter) {
        onOrAfter = this._parseDate(onOrAfter, format);
        if (!date.isSameOrAfter(onOrAfter, precision)) {
          options.onOrAfter = onOrAfter.format(errorFormat);
          return this.createErrorMessage('onOrAfter', value, options);
        }
      }

      return true;
    }
  });
});