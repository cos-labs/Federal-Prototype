define('ember-cp-validations/validators/ds-error', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var DS = self.DS;

  if (typeof self.DS === 'undefined') {
    throw new Error('Ember-Data is required to use the DS Error validator.');
  }

  var get = _ember['default'].get;
  var isNone = _ember['default'].isNone;

  /**
   *  Creates a link between this library and Ember-Data's [DS.Errors](http://emberjs.com/api/data/classes/DS.Errors.html)
   *  to fetch the latest message for the given attribute.
   *
   *  ```javascript
   *  // Examples
   *  validator('ds-error')
   *  ```
   *
   *  @class DS Error
   *  @module Validators
   *  @extends Base
   */
  var DSError = _emberCpValidationsValidatorsBase['default'].extend({
    validate: function validate(value, options, model, attribute) {
      var errors = get(model, 'errors');

      if (!isNone(errors) && errors instanceof DS.Errors && errors.has(attribute)) {
        return get(errors.errorsFor(attribute), 'lastObject.message');
      }

      return true;
    }
  });

  DSError.reopenClass({
    getDependentsFor: function getDependentsFor(attribute) {
      return ['_model.errors.' + attribute + '.[]'];
    }
  });

  exports['default'] = DSError;
});