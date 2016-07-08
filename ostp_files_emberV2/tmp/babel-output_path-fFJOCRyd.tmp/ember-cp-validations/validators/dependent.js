define('ember-cp-validations/validators/dependent', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isNone = _ember['default'].isNone;
  var isEmpty = _ember['default'].isEmpty;

  /**
   *  Defines an attribute as valid only if its dependents are valid.
   *
   *   #### Options
   *  - `on` (**Array**): Attributes this field is dependent on
   *
   *  ```javascript
   *  // Example
   *  // Full name will only be valid if firstName and lastName are filled in
   *  validator('dependent', {
   *      on: ['firstName', 'lastName'],
   *  })
   *  ```
   *
   *  @class Dependent
   *  @module Validators
   *  @extends Base
   */
  var Dependent = _emberCpValidationsValidatorsBase['default'].extend({
    validate: function validate(value, options, model) {
      if (isNone(options) || isNone(model) || isEmpty(Object.keys(options))) {
        return true;
      }

      if (options.allowBlank && isEmpty(value)) {
        return true;
      }

      if (isEmpty(options.on)) {
        return true;
      }

      var dependentValidations = options.on.map(function (dependent) {
        return get(model, 'validations.attrs.' + dependent);
      });

      if (!isEmpty(dependentValidations.filter(function (v) {
        return !get(v, 'isTruelyValid');
      }))) {
        return this.createErrorMessage('invalid', value, options);
      }

      return true;
    }
  });

  Dependent.reopenClass({
    getDependentsFor: function getDependentsFor(attribute, options) {
      var dependents = options.on;

      if (!isEmpty(dependents)) {
        return dependents.map(function (dependent) {
          return dependent + '.isTruelyValid';
        });
      }

      return [];
    }
  });

  exports['default'] = Dependent;
});