define('ostp-files-ember-v2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ostp-files-ember-v2/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ostpFilesEmberV2ConfigEnvironment) {

  var name = _ostpFilesEmberV2ConfigEnvironment['default'].APP.name;
  var version = _ostpFilesEmberV2ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});