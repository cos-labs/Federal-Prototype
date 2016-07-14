import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {
    if(document.location.pathname === "/settings/metadata"){ this.transitionTo('settings.metadata'); }
    else if(document.location.pathname === "/settings/api"){ this.transitionTo('settings.api'); }
    else{this.transitionTo('settings.metadata'); }
  }
});
