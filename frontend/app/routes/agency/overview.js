
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model() {
        var dept = this.get('store').query('department', {
            filter: {
                name: "Department of Open Science",
            },
        })
        this.set('department', dept.get('firstObject'));       
        return Ember.RSVP.hash({
            grants: this.get('store').query('grant', {
                filter: { 
                    department: dept.get('firstObject'),
                },
            }),
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
        controller.set('grants', model.grants);
        //controller.set('document', model.document)
        controller.set('departments', model.departments)
    }

});

