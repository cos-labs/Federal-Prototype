define('ember-osf/authenticators/osf-token', ['exports', 'ember', 'ember-simple-auth/authenticators/base', 'ember-get-config'], function (exports, _ember, _emberSimpleAuthAuthenticatorsBase, _emberGetConfig) {
    'use strict';

    exports['default'] = _emberSimpleAuthAuthenticatorsBase['default'].extend({
        store: _ember['default'].inject.service(),
        authUrl: _emberGetConfig['default'].OSF.authUrl + '/',
        _test: function _test(accessToken) {
            return _ember['default'].$.ajax({
                method: 'GET',
                url: _emberGetConfig['default'].OSF.apiUrl + '/' + _emberGetConfig['default'].OSF.apiNamespace + '/users/me/',
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: false
                },
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            }).then(function (res) {
                res.data.attributes.accessToken = accessToken;
                return res.data;
            });
        },
        restore: function restore(data) {
            var accessToken = data.attributes.accessToken;
            return this._test(accessToken).fail(this.invalidate);
        },
        authenticate: function authenticate(accessToken) {
            return this._test(accessToken);
        }
    });
});