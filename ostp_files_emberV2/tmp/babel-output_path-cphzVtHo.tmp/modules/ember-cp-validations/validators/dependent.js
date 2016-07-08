/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';
import Base from 'ember-cp-validations/validators/base';

var get = Ember.get;
var isNone = Ember.isNone;
var isEmpty = Ember.isEmpty;

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
var Dependent = Base.extend({
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

export default Dependent;