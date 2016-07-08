define('ember-osf/models/user', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * Model for OSF APIv2 users. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     *    https://api.osf.io/v2/docs/#!/v2/User_List_GET
     *    https://api.osf.io/v2/docs/#!/v2/User_Detail_GET
     *    https://api.osf.io/v2/docs/#!/v2/Institution_User_List_GET
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        fullName: _emberData['default'].attr('string'),
        givenName: _emberData['default'].attr('string'),
        middleNames: _emberData['default'].attr(),
        familyName: _emberData['default'].attr('string'),

        dateRegistered: _emberData['default'].attr('date'),

        nodes: _emberData['default'].hasMany('nodes'),
        registrations: _emberData['default'].hasMany('registrations'),

        affiliatedInstitutions: _emberData['default'].hasMany('institutions', {
            inverse: 'users'
        })
    });
});