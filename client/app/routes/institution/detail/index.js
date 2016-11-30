
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model(params) {
        let institution = this.modelFor('institution.detail')
        debugger;
        return Ember.RSVP.hash({
            institution: institution,
            grants: this.get('store').query('grant', {
                'institution':  institution.id
            })
        });
    },

    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        debugger;
        controller.set('institution', model.institution);
        controller.set('grants', model.grants);
    }

});
