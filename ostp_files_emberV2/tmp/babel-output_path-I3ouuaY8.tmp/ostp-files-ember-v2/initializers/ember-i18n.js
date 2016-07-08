define("ostp-files-ember-v2/initializers/ember-i18n", ["exports", "ostp-files-ember-v2/instance-initializers/ember-i18n"], function (exports, _ostpFilesEmberV2InstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _ostpFilesEmberV2InstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _ostpFilesEmberV2InstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});