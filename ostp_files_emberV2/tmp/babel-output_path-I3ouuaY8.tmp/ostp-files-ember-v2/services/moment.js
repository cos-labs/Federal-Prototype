define('ostp-files-ember-v2/services/moment', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.outputFormat')
  });
});