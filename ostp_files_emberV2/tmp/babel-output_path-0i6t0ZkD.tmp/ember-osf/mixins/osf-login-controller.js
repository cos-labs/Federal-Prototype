define('ember-osf/mixins/osf-login-controller', ['exports', 'ember', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfUtilsAuth) {
    'use strict';

    exports['default'] = _ember['default'].Mixin.create({
        session: _ember['default'].inject.service(),
        actions: {
            login: function login() {
                console.log("getAuthUrl =>" + (0, _emberOsfUtilsAuth.getAuthUrl)());

                window.location = (0, _emberOsfUtilsAuth.getAuthUrl)();
            },
            loginSuccess: function loginSuccess() {},
            loginFail: function loginFail() {}
        }
    });
});