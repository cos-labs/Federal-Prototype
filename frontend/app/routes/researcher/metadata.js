import Ember from 'ember';
    
export default Ember.Route.extend({

    store: Ember.inject.service(),
  
    model() {
        var grantController = this.controllerFor('researcher.grant');
        var questions = JSON.parse(grantController.active_grant.get('questions'));
        questions.options.form.buttons.addGrant = {
            "id": 'addGrant',
            'title': 'Connect another grant'
        };
        grantController.active_grant.set('questions', JSON.stringify(questions));
        return { grant: grantController.active_grant };
    },

    setupController: function(controller, model) {
        const formActions = {
            submit: function() {
                var value = this.getValue();
                model.grant.set('answers',value);
                model.grant.save();
                controller.transitionToRoute('researcher.grant');
            }
        };
        model.formActions = formActions;
        controller.set('model', model);
        controller.set('grant', model.grant);
        controller.set('formActions', formActions);
    }

});
