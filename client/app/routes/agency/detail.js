import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        return this.get('store').findRecord('agency', params.agency);
    },

    setupController(controller, model) {
        controller.set('agency', model);
    }
});
