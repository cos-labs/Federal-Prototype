define('ostp-files-ember/app', ['exports', 'ember', 'ostp-files-ember/resolver', 'ember-load-initializers', 'ostp-files-ember/config/environment'], function (exports, _ember, _ostpFilesEmberResolver, _emberLoadInitializers, _ostpFilesEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ostpFilesEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ostpFilesEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _ostpFilesEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ostpFilesEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});