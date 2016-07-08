define('ember-osf/models/comment', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * Model for OSF APIv2 comments. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/Comment_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Comments_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Registration_Comments_List_GET
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        // TODO validation: maxLength
        content: _emberData['default'].attr('string'),
        page: _emberData['default'].attr('string'),

        // TODO dynamic belongsTo
        //target TargetField(link_type='related', meta={'type': 'get_target_type'})
        user: _emberData['default'].belongsTo('user'),
        node: _emberData['default'].belongsTo('node'),
        replies: _emberData['default'].hasMany('comment', {
            inverse: null
        }),

        //reports: DS.hasMany('comment-report'),

        dateCreated: _emberData['default'].attr('date'),
        dateModified: _emberData['default'].attr('date'),
        modified: _emberData['default'].attr('boolean'),
        deleted: _emberData['default'].attr('boolean'),
        isAbuse: _emberData['default'].attr('boolean'),
        hasChildren: _emberData['default'].attr('boolean'),
        canEdit: _emberData['default'].attr('boolean')
    });
});