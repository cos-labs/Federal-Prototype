define('ostp-files-ember/tests/helpers/start-app', ['exports', 'ember', 'ostp-files-ember/app', 'ostp-files-ember/config/environment'], function (exports, _ember, _ostpFilesEmberApp, _ostpFilesEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _ostpFilesEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _ostpFilesEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});