

import Ember from 'ember';


export default Ember.Route.extend({
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('grants', model.grants);
    }

});


