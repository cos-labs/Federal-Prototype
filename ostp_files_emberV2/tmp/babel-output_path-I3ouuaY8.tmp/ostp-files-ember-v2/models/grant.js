define('ostp-files-ember-v2/models/grant', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    grantDepartmentName: (0, _emberDataAttr['default'])('string'),
    grantNumber: (0, _emberDataAttr['default'])('string')
  });
});