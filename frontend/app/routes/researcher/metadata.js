import Ember from 'ember';

export default Ember.Route.extend({


model() {
  var parentModel = this.modelFor('researcher');
  const formActions = {
    submit: function() {
      var value = this.getValue();
      alert(JSON.stringify(value, null, "  "));
      console.log(value);
    },
  };
  return { parentModel, formActions };
}
});
