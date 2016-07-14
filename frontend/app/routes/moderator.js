import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {
  },
   actions: {
    didTransition: function() {
       Ember.$(".moderatorHolder").show();
    }
  }

});
