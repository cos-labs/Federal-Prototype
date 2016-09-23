import Ember from 'ember';
//add this and the AuthenticatedRouteMixin to the extend rout to protect it unless logged in


export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').findAll('grant'),
            documents: this.get('store').findAll('document'),
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
        controller.set('agency', true);
        controller.set('isFileUploaded', "researcher-form");
        controller.set('grants', model.grants)
        controller.set('documents', model.documents)
        controller.set('institutions', model.institutions)
    }

});
