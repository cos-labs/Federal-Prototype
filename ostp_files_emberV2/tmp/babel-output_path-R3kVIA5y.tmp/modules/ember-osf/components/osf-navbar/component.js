import Ember from 'ember';
import layout from './template';
import config from 'ember-get-config';

import { getAuthUrl } from 'ember-osf/utils/auth';

export default Ember.Component.extend({
    layout: layout,
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    onSearchPage: false,
    gravatarUrl: Ember.computed.alias('user.links.profile_image'),
    fullName: null,
    host: config.OSF.url,
    authUrl: getAuthUrl(),
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