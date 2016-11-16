
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').query('grant', {institution: true}),
            agencies: this.get('store').findAll('agency'),
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institution', true);
        controller.set('role', 'institution');
        controller.set('isFileUploaded', "researcher-form");
        // debugger;
        controller.set('grants', model.grants);
        //controller.set('document', model.document)
        controller.set('agencies', model.agencies);
    }

});
