import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model() {
        return Ember.RSVP.hash({
            agency: this.modelFor('agency.detail'),
            grants: this.get('store').findAll('grant'),
            institutions: this.get('store').findAll('institution'),
        });
    },

    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institutions', model.institutions);
        controller.set('grants', model.grants.filter(function(grant) {
            return grant.get('institution');
        }));
        controller.set('agency', model.agency);
        debugger;
    }

});
