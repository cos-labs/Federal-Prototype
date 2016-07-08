define('ostp-files-ember-v2/tests/helpers/start-app', ['exports', 'ember', 'ostp-files-ember-v2/app', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2App, _ostpFilesEmberV2ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _ostpFilesEmberV2ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _ostpFilesEmberV2App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});