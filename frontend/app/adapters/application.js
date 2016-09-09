import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default JSONAPIAdapter.extend(DataAdapterMixin,{
  authorizer: 'authorizer:oauth2',
  host: 'http://127.0.0.1:8000',
  buildURL: function(type, id, record) {
    //call the default buildURL and then append a slash
    // return this._super(type, id, record) + '/';
    return this._super(type, id, record);
  }
});
