define('ember-osf/components/osf-navbar/component', ['exports', 'ember', 'ember-osf/components/osf-navbar/template', 'ember-get-config', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfComponentsOsfNavbarTemplate, _emberGetConfig, _emberOsfUtilsAuth) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOsfNavbarTemplate['default'],
        session: _ember['default'].inject.service(),
        currentUser: _ember['default'].inject.service(),
        onSearchPage: false,
        gravatarUrl: _ember['default'].computed.alias('user.links.profile_image'),
        fullName: null,
        host: _emberGetConfig['default'].OSF.url,
        authUrl: (0, _emberOsfUtilsAuth.getAuthUrl)(),
        user: null,
        showSearch: false,
        _loadCurrentUser: function _loadCurrentUser() {
            var _this = this;

            this.get('currentUser').load().then(function (user) {
                return _this.set('user', user);
            });
        },
        init: function init() {
            this._super.apply(this, arguments);
            if (this.get('session.isAuthenticated')) {
                this._loadCurrentUser();
            }
        },
        // TODO: Make these parameters configurable from... somewhere. (currently set by OSF settings module)
        allowLogin: true,
        enableInstitutions: true,
        actions: {
            toggleSearch: function toggleSearch() {
                this.toggleProperty('showSearch');
            },
            logout: function logout() {
                this.get('session').invalidate().then(function () {
                    return window.location.reload(true);
                });
            },
            loginSuccess: function loginSuccess() {
                this._loadCurrentUser();
                this.sendAction('loginSuccess');
            },
            loginFail: function loginFail() {
                this.sendAction('loginFail');
            }
        }
    });
});