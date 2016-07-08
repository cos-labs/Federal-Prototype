define('ostp-files-ember-v2/app', ['exports', 'ember', 'ostp-files-ember-v2/resolver', 'ember-load-initializers', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2Resolver, _emberLoadInitializers, _ostpFilesEmberV2ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ostpFilesEmberV2ConfigEnvironment['default'].podModulePrefix,
    Resolver: _ostpFilesEmberV2Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});