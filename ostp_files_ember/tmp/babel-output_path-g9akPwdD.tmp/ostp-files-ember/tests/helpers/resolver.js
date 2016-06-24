define('ostp-files-ember/tests/helpers/resolver', ['exports', 'ostp-files-ember/resolver', 'ostp-files-ember/config/environment'], function (exports, _ostpFilesEmberResolver, _ostpFilesEmberConfigEnvironment) {

  var resolver = _ostpFilesEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ostpFilesEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ostpFilesEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});