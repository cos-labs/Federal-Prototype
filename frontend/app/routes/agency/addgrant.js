
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').findAll('grant'),
            departments: this.get('store').findAll('department'),
            institutions: [
                'UVA',
                'HARVARD',
                'CALTECH',
                'MIT'
            ],
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institutions', model.institutions);    
        controller.set('institution', true);
        controller.set('isFileUploaded', "researcher-form");
        controller.set('grants', model.grants.filter(function(grant) {
            return grant.get('institution');
        }));
        //controller.set('document', model.document)
        controller.set('departments', model.departments);
    }

});

