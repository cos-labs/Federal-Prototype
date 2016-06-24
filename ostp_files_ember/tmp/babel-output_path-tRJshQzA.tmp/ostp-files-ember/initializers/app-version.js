define('ostp-files-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ostp-files-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ostpFilesEmberConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ostpFilesEmberConfigEnvironment['default'].APP.name, _ostpFilesEmberConfigEnvironment['default'].APP.version)
  };
});