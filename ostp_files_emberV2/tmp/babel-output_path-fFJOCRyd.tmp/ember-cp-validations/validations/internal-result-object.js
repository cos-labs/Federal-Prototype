define('ember-cp-validations/validations/internal-result-object', ['exports', 'ember', 'ember-cp-validations/validations/error', 'ember-cp-validations/utils/utils'], function (exports, _ember, _emberCpValidationsValidationsError, _emberCpValidationsUtilsUtils) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  'use strict';

  var get = _ember['default'].get;
  var isNone = _ember['default'].isNone;
  var computed = _ember['default'].computed;
  var canInvoke = _ember['default'].canInvoke;
  var makeArray = _ember['default'].makeArray;
  var defineProperty = _ember['default'].defineProperty;
  var and = computed.and;
  var not = computed.not;

  exports['default'] = _ember['default'].Object.extend({
    model: null,
    isValid: true,
    isValidating: false,
    message: null,
    attribute: '',

    attrValue: null,
    _promise: null,

    init: function init() {
      this._super.apply(this, arguments);
      // TODO: Not good practice. Stef will make this go away.
      defineProperty(this, 'attrValue', computed.oneWay('model.' + get(this, 'attribute')));
    },

    isNotValidating: not('isValidating'),
    isInvalid: not('isValid'),
    isTruelyValid: and('isNotValidating', 'isValid'),

    isAsync: computed('_promise', function () {
      var promise = get(this, '_promise');

      return !isNone(promise) && canInvoke(promise, 'then');
    }),

    isDirty: computed('attrValue', function () {
      var model = get(this, 'model');
      var attribute = get(this, 'attribute');
      var attrValue = get(this, 'attrValue');

      // Check default model values
      if ((0, _emberCpValidationsUtilsUtils.hasEmberData)() && model instanceof self.DS.Model && canInvoke(model, 'eachAttribute')) {
        var attrMeta = model.get('constructor.attributes').get(attribute);

        if (attrMeta) {
          var defaultValue = attrMeta.options.defaultValue;

          if (!isNone(defaultValue)) {
            return defaultValue !== attrValue;
          }
        }
      }
      return !isNone(attrValue);
    }),

    messages: computed('message', function () {
      return makeArray(get(this, 'message'));
    }),

    error: computed('message', 'isInvalid', 'attribute', function () {
      if (get(this, 'isInvalid')) {
        return _emberCpValidationsValidationsError['default'].create({
          message: get(this, 'message'),
          attribute: get(this, 'attribute')
        });
      }

      return null;
    }),

    errors: computed('error', function () {
      return makeArray(get(this, 'error'));
    })
  });
});