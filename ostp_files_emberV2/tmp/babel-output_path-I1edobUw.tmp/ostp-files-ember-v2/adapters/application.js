define('ostp-files-ember-v2/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _emberDataAdaptersJsonApi) {
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({
    host: 'http://127.0.0.1:8000',
    buildURL: function buildURL(type, id, record) {
      //call the default buildURL and then append a slash
      // return this._super(type, id, record) + '/';
      return this._super(type, id, record);
    }
  });
});