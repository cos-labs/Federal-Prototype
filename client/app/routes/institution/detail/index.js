
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model(params) {
        return this.modelFor('institution.detail');
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
