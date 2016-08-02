import Ember from 'ember';

export default Ember.Route.extend({

model() {
  var parentModel = this.modelFor('researcher');
  const formActions = {
    submit: function() {
      var value = this.getValue();
      parentModel.grant.set('answers',value);
      console.log(value);
      parentModel.grant.save();
      // Add transition to successful-upload.hbs
      this.transitionTo();
    },
  };
  return { parentModel, formActions };
},
actions: {
 transitionTo() {
  var controller = this.controller;
  this.transitionTo('researcher.success');
  }

}

});
