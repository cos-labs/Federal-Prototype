define('ember-cp-validations/validators/belongs-to', ['exports', 'ember', 'ember-cp-validations/validators/base'], function (exports, _ember, _emberCpValidationsValidatorsBase) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var canInvoke = _ember['default'].canInvoke;

  /**
   *  Identifies a `belongs-to` relationship in an Ember Data Model or Ember.Object.
   *  This is used to create a link to the validations object of the child model.
   *
   *  _**Note:** Validations must exist on **both** models/objects_
   *
   *  ### Ember Model
   *
   *  ```javascript
   *  // model/users.js
   *
   *  const Validations = buildValidations({
   *    details: validator('belongs-to')
   *  });
   *
   *  export default DS.Model.extend(Validations, {
   *    'details': DS.belongsTo('user-detail')
   *  });
   *  ```
   *
   *  ```javascript
   *  // model/user-details.js
   *
   *  const Validations = buildValidations({
   *    firstName: validator('presence', true),
   *    lastName: validator('presence', true)
   *  });
   *
   *  export default DS.Model.extend(Validations, {
   *    "firstName": attr('string'),
   *    "lastName": attr('string'),
   *  });
   *  ```
   *
   *  ### Ember Object
   *
   *  ```javascript
   *  // model/users.js
   *
   *  import UserDetails from '../user-details';
   *
   *  const Validations = buildValidations({
   *    details: validator('belongs-to')
   *  });
   *
   *  export default Ember.Object.extend(Validations, {
   *    details: null,
   *
   *    init() {
   *      this._super(...arguments);
   *      let owner = Ember.getOwner(this);
   *      this.set('details', UserDetails.create(owner.ownerInjection()));
   *    }
   *  });
   *  ```
   *
   *  From our `user` model, we can now check any validation propery on the `user-details` model.
   *
   *  ```javascript
   *  get(model, 'validations.attrs.details.isValid')
   *  get(model, 'validations.attrs.details.messages')
   *  ```
   *
   *  @class Belongs To
   *  @module Validators
   *  @extends Base
   */
  var BelongsTo = _emberCpValidationsValidatorsBase['default'].extend({
    validate: function validate(value) {
      if (value) {
        if (canInvoke(value, 'then')) {
          return value.then(function (model) {
            return model ? get(model, 'validations') : true;
          });
        }
        return get(value, 'validations');
      }

      return true;
    }
  });

  BelongsTo.reopenClass({
    getDependentsFor: function getDependentsFor(attribute) {
      return [attribute + '.isTruelyValid'];
    }
  });

  exports['default'] = BelongsTo;
});