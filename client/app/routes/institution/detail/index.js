
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model(params) {
        debugger;
        return this.get('store').findRecord('institution', params.institution)
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        debugger;
        controller.set('role', 'institution');
        //controller.set('isFileUploaded', "researcher-form");
        // debugger;
        //controller.set('grants', model.grants);
        //controller.set('document', model.document)
        controller.set('agencies', model.agencies);
    }

});
