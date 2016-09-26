import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:8001',
  buildURL: function(type, id, record) {
    //call the default buildURL and then append a slash
    // return this._super(type, id, record) + '/';
    return this._super(type, id, record);
  }
});
