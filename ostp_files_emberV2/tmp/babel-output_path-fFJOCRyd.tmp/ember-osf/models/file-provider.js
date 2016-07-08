define('ember-osf/models/file-provider', ['exports', 'ember', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _ember, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * Model for OSF APIv2 file providers. Primarily used in relationship fields.
     * This model is used for basic file provider metadata. To interact with file contents directly, see the `file-manager` service.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/Node_Providers_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Provider_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Registration_Providers_List_GET
    */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        name: _emberData['default'].attr('string'),
        kind: _emberData['default'].attr('string'),
        path: _emberData['default'].attr('string'),
        provider: _emberData['default'].attr('string'),
        files: _emberData['default'].hasMany('file'),
        node: _emberData['default'].belongsTo('node'),

        isFolder: _ember['default'].computed.equal('kind', 'folder'),
        isProvider: true
    });
});