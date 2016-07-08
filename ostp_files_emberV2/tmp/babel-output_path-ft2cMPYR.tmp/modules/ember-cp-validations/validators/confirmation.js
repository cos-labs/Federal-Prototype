/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';
import Base from 'ember-cp-validations/validators/base';

var get = Ember.get;
var isEqual = Ember.isEqual;
var isNone = Ember.isNone;

/**
 *  You should use this validator when you have two text fields that should receive exactly the same content.
 *  For example, you may want to confirm an email address or a password. This validator doesnt have to be created on an attribute defined in your model.
 *  This means that when you save your model, in this case, `verfiedEmail` will not be part of the payload.
 *
 *  ```javascript
 *  // Example
 *  email: validator('format', {
 *    type: 'email'
 *  })
 *  verifiedEmail: validator('confirmation', {
 *    on: 'email',
 *    message: 'do not match',
 *    description: 'Email addresses'
 *  })
 *  ```
 *
 *  @class Confirmation
 *  @module Validators
 *  @extends Base
 */
var Confirmation = Base.extend({
  validate: function validate(value, options, model) {
    if (!isNone(options.on) && !isEqual(value, get(model, options.on))) {
      return this.createErrorMessage('confirmation', value, options);
    }

    return true;
  }
});

Confirmation.reopenClass({
  getDependentsFor: function getDependentsFor(attribute, options) {
    return options.on ? ['_model.' + options.on] : [];
  }
});

export default Confirmation;