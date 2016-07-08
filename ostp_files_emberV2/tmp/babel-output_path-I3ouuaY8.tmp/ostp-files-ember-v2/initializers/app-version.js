define('ostp-files-ember-v2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ostp-files-ember-v2/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ostpFilesEmberV2ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ostpFilesEmberV2ConfigEnvironment['default'].APP.name, _ostpFilesEmberV2ConfigEnvironment['default'].APP.version)
  };
});