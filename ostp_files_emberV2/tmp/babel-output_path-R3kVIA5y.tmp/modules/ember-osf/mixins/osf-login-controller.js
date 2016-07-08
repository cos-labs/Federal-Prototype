import Ember from 'ember';

import { getAuthUrl } from 'ember-osf/utils/auth';

export default Ember.Mixin.create({
    session: Ember.inject.service(),
    actions: {
        login: function login() {
            console.log("getAuthUrl =>" + getAuthUrl());

            window.location = getAuthUrl();
        },
        loginSuccess: function loginSuccess() {},
        loginFail: function loginFail() {}
    }
});