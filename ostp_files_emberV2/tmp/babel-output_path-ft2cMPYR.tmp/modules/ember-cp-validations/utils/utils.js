export { hasEmberData };
export { unwrapString };
/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';

function hasEmberData() {
  return typeof self.DS !== 'undefined';
}

function unwrapString(input) {
  if (input && input instanceof Ember.Handlebars.SafeString) {
    return input.toString();
  }

  return input;
}