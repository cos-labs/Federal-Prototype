
import Ember from 'ember';


export default Ember.Route.extend({

    model() {
        var agency = this.get('store').query('agency', {
            filter: {
                name: "Department of Open Science",
            },
        });
        this.set('agency', dept.get('firstObject'));       
        return Ember.RSVP.hash({
            grants: this.get('store').query('grant', {
                filter: { 
                    agency: dept.get('firstObject'),
                },
            }),
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
    }

});

