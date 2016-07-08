define('ember-osf/authorizers/osf-token', ['exports', 'ember-simple-auth/authorizers/base'], function (exports, _emberSimpleAuthAuthorizersBase) {
    'use strict';

    exports['default'] = _emberSimpleAuthAuthorizersBase['default'].extend({
        authorize: function authorize(sessionData, setHeader) {
            setHeader('Authorization', 'Bearer ' + sessionData.attributes.accessToken);
        }
    });
});