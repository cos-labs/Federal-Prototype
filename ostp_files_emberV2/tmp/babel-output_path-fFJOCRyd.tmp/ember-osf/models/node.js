define('ember-osf/models/node', ['exports', 'ember-data', 'ember-osf/models/osf-model', 'ember-osf/utils/serialize-relationship'], function (exports, _emberData, _emberOsfModelsOsfModel, _emberOsfUtilsSerializeRelationship) {
    'use strict';

    /**
     * Model for OSF APIv2 nodes. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/Node_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Children_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Linked_Nodes_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/Node_Forks_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/User_Nodes_GET
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        title: _emberData['default'].attr('string'),
        description: _emberData['default'].attr('string'),
        category: _emberData['default'].attr('string'),

        currentUserPermissions: _emberData['default'].attr('string'),

        fork: _emberData['default'].attr('boolean'),
        collection: _emberData['default'].attr('boolean'),
        registration: _emberData['default'].attr('boolean'),
        'public': _emberData['default'].attr('boolean'),

        dateCreated: _emberData['default'].attr('date'),
        dateModified: _emberData['default'].attr('date'),

        tags: _emberData['default'].attr(),

        templateFrom: _emberData['default'].attr('string'),

        parent: _emberData['default'].belongsTo('node', {
            inverse: 'children'
        }),
        children: _emberData['default'].hasMany('nodes', {
            inverse: 'parent',
            updateRequest: {
                requestType: function requestType() {
                    return 'POST';
                }
            }
        }),
        affiliatedInstitutions: _emberData['default'].hasMany('institutions', {
            inverse: 'nodes',
            serializer: _emberOsfUtilsSerializeRelationship.serializeHasMany.bind(null, 'affiliatedInstitutions', 'institution')
        }),
        comments: _emberData['default'].hasMany('comments'),
        contributors: _emberData['default'].hasMany('contributors', {
            updateRequest: {
                requestType: function requestType(snapshot, relationship) {
                    if (snapshot.hasMany(relationship).filter(function (each) {
                        return each.record.get('isNew');
                    }).length) {
                        return 'POST';
                    }
                    return 'PATCH';
                },
                isBulk: function isBulk() {
                    return true;
                },
                serialized: function serialized(_serialized) {
                    return {
                        data: _serialized.map(function (record) {
                            var data = record.data;
                            return data;
                        })
                    };
                }
            },
            inverse: null
        }),

        files: _emberData['default'].hasMany('file-provider'),
        //forkedFrom: DS.belongsTo('node'),
        nodeLinks: _emberData['default'].hasMany('node-links', {
            updateRequest: {
                requestType: function requestType() {
                    return 'POST';
                },
                isBulk: function isBulk() {
                    return true;
                },
                serialized: function serialized(_serialized2) {
                    return {
                        data: _serialized2.map(function (record) {
                            var data = record.data;
                            return data;
                        })
                    };
                }
            },
            inverse: null
        }),
        registrations: _emberData['default'].hasMany('registrations', {
            inverse: 'registeredFrom',
            updateRequest: {
                requestType: function requestType() {
                    return 'POST';
                }
            }
        }),

        draftRegistrations: _emberData['default'].hasMany('draft-registrations', {
            inverse: 'branchedFrom',
            updateRequest: {
                requestType: function requestType() {
                    return 'POST';
                }
            }
        }),

        root: _emberData['default'].belongsTo('node', {
            inverse: null
        }),
        logs: _emberData['default'].hasMany('logs')
    });
});