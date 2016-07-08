define('ember-osf/mixins/osf-login-route', ['exports', 'ember', 'ember-simple-auth/mixins/unauthenticated-route-mixin', 'ember-get-config', 'ember-osf/utils/auth'], function (exports, _ember, _emberSimpleAuthMixinsUnauthenticatedRouteMixin, _emberGetConfig, _emberOsfUtilsAuth) {
    'use strict';

    exports['default'] = _ember['default'].Mixin.create(_emberSimpleAuthMixinsUnauthenticatedRouteMixin['default'], {
        session: _ember['default'].inject.service(),
        beforeModel: function beforeModel() {
            var _this = this;

            var accessToken;
            if (_emberGetConfig['default'].OSF.isLocal) {
                accessToken = _emberGetConfig['default'].OSF.accessToken;
            } else {
                accessToken = (0, _emberOsfUtilsAuth.getTokenFromHash)(window.location.hash);
                if (!accessToken) {
                    return null;
                }
                window.location.hash = '';
            }

            return this.get('session').authenticate('authenticator:osf-token', accessToken).then(function () {
                return _this.transitionTo('index');
            });
        }
    });
});