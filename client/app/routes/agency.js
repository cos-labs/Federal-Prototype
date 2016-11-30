import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.get('store').query('agency', {
            filter: {
                permission: 'administer'
            }
        });
    },

    actions: {
        changeAgency() {
            this,transitionTo();
        }
    },

    setupController(controller, model) {
        controller.set('agencies', model);
    }

});
