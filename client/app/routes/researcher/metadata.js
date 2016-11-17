import Ember from 'ember';
    
export default Ember.Route.extend({

    store: Ember.inject.service(),
  
    model() {
        var grantController = this.controllerFor('researcher.grant');
        var schema = JSON.parse(grantController.active_grant.get('schema'));
        schema.options.form.buttons.addGrant = {
            "id": 'addGrant',
            'title': 'Connect another grant'
        };
        grantController.active_grant.set('schema', JSON.stringify(schema));
        return { grant: grantController.active_grant };
    },

    setupController: function(controller, model) {
        const formActions = {
            submit: function() {
                var value = this.getValue();
                model.grant.set('metadata',value);
                model.grant.save();
                model.grant.save().then(() => {
                    controller.transitionToRoute('researcher.overview');
                });
            },
            addGrant: function() {
                var value = this.getValue();
                model.grant.set('metadata',value);
                model.grant.save().then(() => {
                    controller.transitionToRoute('researcher.grant');
                });
            },
        };
        model.formActions = formActions;
        controller.set('model', model);
        controller.set('grant', model.grant);
        controller.set('formActions', formActions);
    }
});
