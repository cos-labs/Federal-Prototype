define('ember-osf/services/current-user', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Service.extend({
        store: _ember['default'].inject.service(),
        session: _ember['default'].inject.service(),
        currentUserId: _ember['default'].computed('session.data.authenticated', function () {
            var session = this.get('session');
            if (session.get('isAuthenticated')) {
                return session.get('data.authenticated.id');
            } else {
                return null;
            }
        }),
        load: function load() {
            var _this = this;

            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
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
});