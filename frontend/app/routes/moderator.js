import Ember from 'ember';

export default Ember.Route.extend({
 actions: {
      visible() {
        console.log("hey");
        $(".moderatorHolder").css("display", "none");

      }
    }
});
