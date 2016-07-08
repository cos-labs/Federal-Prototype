define('ostp-files-ember-v2/helpers/moment-to-now', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});