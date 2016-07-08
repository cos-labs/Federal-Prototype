/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';
import ValidationError from './error';
import { hasEmberData } from '../utils/utils';

var get = Ember.get;
var isNone = Ember.isNone;
var computed = Ember.computed;
var canInvoke = Ember.canInvoke;
var makeArray = Ember.makeArray;
var defineProperty = Ember.defineProperty;
var and = computed.and;
var not = computed.not;

export default Ember.Object.extend({
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
    if (hasEmberData() && model instanceof self.DS.Model && canInvoke(model, 'eachAttribute')) {
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
      return ValidationError.create({
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