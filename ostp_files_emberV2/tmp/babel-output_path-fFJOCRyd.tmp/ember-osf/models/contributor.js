define('ember-osf/models/contributor', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * Model for OSF APIv2 contributors. Primarily accessed via relationship fields.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/Node_Contributors_List_GET
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        bibliographic: _emberData['default'].attr('boolean'),
        permission: _emberData['default'].attr('string'),
        userId: _emberData['default'].attr('string'),
        users: _emberData['default'].belongsTo('user'),
        nodeId: _emberData['default'].attr('string'),
        unregisteredContributor: _emberData['default'].attr('string')
    });
});