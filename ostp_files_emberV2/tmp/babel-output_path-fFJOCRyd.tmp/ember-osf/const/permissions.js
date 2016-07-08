define('ember-osf/const/permissions', ['exports'], function (exports) {
    'use strict';

    var ADMIN = 'admin';
    var READ = 'read';
    var WRITE = 'write';

    exports['default'] = {
        ADMIN: ADMIN,
        READ: READ,
        WRITE: WRITE,
        PERMISSIONS: [READ, WRITE, ADMIN],
        CREATOR_PERMISSIONS: [READ, WRITE, ADMIN],
        DEFAULT_CONTRIBUTOR_PERMISSIONS: [READ, WRITE]
    };
});