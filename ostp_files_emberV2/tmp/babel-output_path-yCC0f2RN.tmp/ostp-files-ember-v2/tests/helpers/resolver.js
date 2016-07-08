define('ostp-files-ember-v2/tests/helpers/resolver', ['exports', 'ostp-files-ember-v2/resolver', 'ostp-files-ember-v2/config/environment'], function (exports, _ostpFilesEmberV2Resolver, _ostpFilesEmberV2ConfigEnvironment) {

  var resolver = _ostpFilesEmberV2Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});