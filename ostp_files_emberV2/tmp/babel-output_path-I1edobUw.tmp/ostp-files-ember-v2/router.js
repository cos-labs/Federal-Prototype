define('ostp-files-ember-v2/router', ['exports', 'ember', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ostpFilesEmberV2ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('researcher');
    this.route('admin');
    this.route('login');
    this.route('settings');
  });

  exports['default'] = Router;
});