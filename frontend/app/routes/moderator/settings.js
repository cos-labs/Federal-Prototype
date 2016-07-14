import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {
    this.transitionTo('moderator.settings.metadata');
     $(".moderatorHolder").css("display", "none");
  },
  didInsertElement() {
  this._super(...arguments);
    $(".moderatorHolder").css("display", "none");

}

});
