define('ostp-files-ember-v2/helpers/moment-calendar', ['exports', 'ember', 'ostp-files-ember-v2/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _ostpFilesEmberV2ConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ostpFilesEmberV2ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});