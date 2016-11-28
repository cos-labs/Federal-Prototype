
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    currentUser: Ember.inject.service(),

    model() {
        let __user_id = this.get('currentUser').load().then((user) => {
            return user.id
        });
        let __grants = Promise.resolve(__user_id).then((user_id) => {
            let grants = this.get('store').query('grant', {
                pi: user_id
            });
            return Promise.resolve(grants);
        })
        return Ember.RSVP.hash({
            grants: __grants,
            documents: this.get('store').findAll('document'),
            institutions: [
                'UVA',
                'HARVARD',
                'CALTECH',
                'MIT'
            ]
        });
    },

    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('role', 'overview');
        controller.set('agencies', model.agencies);
    }

});
