define('ostp-files-ember-v2/models/grant', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    number: (0, _emberDataAttr['default'])('string'),
    department: (0, _emberDataAttr['default'])('string'),
    document: (0, _emberDataAttr['default'])('string')
  });
});