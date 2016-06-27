define('ostp-files-ember/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ostp-files-ember/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ostpFilesEmberConfigEnvironment) {

  var name = _ostpFilesEmberConfigEnvironment['default'].APP.name;
  var version = _ostpFilesEmberConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});