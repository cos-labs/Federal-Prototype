import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    currentUserId: Ember.computed('session.data.authenticated', function () {
        var session = this.get('session');
        if (session.get('isAuthenticated')) {
            return session.get('data.authenticated.id');
        } else {
            return null;
        }
    }),
    load: function load() {
        var _this = this;

        return new Ember.RSVP.Promise(function (resolve, reject) {
            var currentUserId = _this.get('currentUserId');
            if (currentUserId) {
                var currentUser = _this.get('store').peekRecord('user', currentUserId);
                if (currentUser) {
                    resolve(currentUser);
                } else {
                    _this.get('store').findRecord('user', currentUserId).then(function (user) {
                        return resolve(user);
                    }, reject);
                }
            } else {
                reject();
            }
        });
    }
});