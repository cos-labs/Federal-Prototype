/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';

var id = 0;
var dataKey = symbol('data');

function symbol(key) {
  return '_' + key + '_' + new Date().getTime() + '_' + id++;
}

function getData(obj, s) {
  var m = Ember.meta(obj);
  var data = m[dataKey];

  if (data) {
    return data[s];
  }
}

function setData(obj, s, value) {
  var m = Ember.meta(obj);
  var data = m[dataKey] = m[dataKey] || {};

  data[s] = value;
}

export default { symbol: symbol, getData: getData, setData: setData };