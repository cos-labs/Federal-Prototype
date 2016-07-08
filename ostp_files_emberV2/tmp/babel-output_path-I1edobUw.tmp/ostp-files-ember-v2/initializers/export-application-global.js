define('ostp-files-ember-v2/initializers/export-application-global', ['exports', 'ember', 'ostp-files-ember-v2/config/environment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ostpFilesEmberV2ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _ostpFilesEmberV2ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ostpFilesEmberV2ConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});