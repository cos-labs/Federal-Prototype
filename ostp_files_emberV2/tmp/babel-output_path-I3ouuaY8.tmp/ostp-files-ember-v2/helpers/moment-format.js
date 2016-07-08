define('ostp-files-ember-v2/helpers/moment-format', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});