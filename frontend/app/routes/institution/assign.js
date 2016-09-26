

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').findAll('grant'),
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        },

        assignGrant: function(grant, name) {
            grant.set('pi', name);
            grant.save().then(() => {
                this.transitionTo('institution.overview');
            });
        }
    },

    setupController(controller, model) {
        controller.set('institution', true);
        controller.set('grants', model.grants);
    }

});

