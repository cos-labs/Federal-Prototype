
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').query('grant', {institution: true}),
            departments: this.get('store').findAll('department'),
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institution', true);
        controller.set('isFileUploaded', "researcher-form");
        // debugger;
        controller.set('grants', model.grants);
        //controller.set('document', model.document)
        controller.set('departments', model.departments);
    }

});
