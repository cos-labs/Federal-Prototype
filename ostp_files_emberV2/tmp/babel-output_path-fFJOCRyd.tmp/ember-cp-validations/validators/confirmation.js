define('ember-cp-validations/validators/confirmation', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isEqual = _ember['default'].isEqual;
  var isNone = _ember['default'].isNone;

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
  var Confirmation = _emberCpValidationsValidatorsBase['default'].extend({
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

  exports['default'] = Confirmation;
});