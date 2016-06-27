define('ostp-files-ember/router', ['exports', 'ember', 'ostp-files-ember/config/environment'], function (exports, _ember, _ostpFilesEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ostpFilesEmberConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home');
  });

  exports['default'] = Router;
});