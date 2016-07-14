import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {
    this.transitionTo('moderator');
  },
   actions: {
    didTransition: function() {
       $(".moderatorHolder").show();
    }
  }

});
