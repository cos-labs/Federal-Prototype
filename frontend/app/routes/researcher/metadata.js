import Ember from 'ember';

export default Ember.Route.extend({


model() {
  var parentModel = this.modelFor('researcher');
  const formActions = {
    submit: function() {
      var value = this.getValue();
      alert(JSON.stringify(value, null, "  "));
      console.log(value);
      console.log(parentModel.grant);
      parentModel.grant.set('answers', JSON.stringify(value, null, "  "));
      parentModel.grant.save();
      // Add transition to successful-upload.hbs
    },
  };
  return { parentModel, formActions };
}
});
