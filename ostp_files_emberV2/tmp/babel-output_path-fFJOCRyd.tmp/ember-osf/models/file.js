define('ember-osf/models/file', ['exports', 'ember', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _ember, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * Model for OSF APIv2 files. This model may be used with one of several API endpoints. It may be queried directly,
     *  or (more commonly) accessed via relationship fields.
     * This model is used for basic file metadata. To interact with file contents directly, see the `file-manager` service.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/File_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Files_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_File_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Registration_Files_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Registration_File_Detail_GET
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        name: _emberData['default'].attr('string'),
        kind: _emberData['default'].attr('string'),
        path: _emberData['default'].attr('string'),
        size: _emberData['default'].attr('number'),
        provider: _emberData['default'].attr('string'),
        materializedPath: _emberData['default'].attr('string'),
        lastTouched: _emberData['default'].attr('date'),
        dateModified: _emberData['default'].attr('date'),
        dateCreated: _emberData['default'].attr('date'),
        extra: _emberData['default'].attr(),
        tags: _emberData['default'].attr(),

        parentFolder: _emberData['default'].belongsTo('file', { inverse: 'files' }),
        isFolder: _ember['default'].computed.equal('kind', 'folder'),
        isFile: _ember['default'].computed.equal('kind', 'file'),
        isProvider: false,

        // Folder attributes
        files: _emberData['default'].hasMany('file', { inverse: 'parentFolder' }),

        // File attributes
        versions: _emberData['default'].hasMany('file-version'),
        comments: _emberData['default'].hasMany('comment'),
        checkout: _emberData['default'].attr('string')
    });
});