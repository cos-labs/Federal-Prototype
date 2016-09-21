import Ember from 'ember';
    

export default Ember.Route.extend({
  model() {
    var parentModel = this.modelFor('researcher');
    return { parentModel: parentModel };
  },
  setupController: function(controller, model) {
    const formActions = {
      submit: function() {
        var value = this.getValue();
        model.parentModel.grant.set('answers',value);
        model.parentModel.grant.save();
        controller.transitionToRoute('researcher.success');
      }
    };
    model.formActions = formActions
    controller.set('model', model);
  }
});
