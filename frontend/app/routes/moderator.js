import Ember from 'ember';
//add this and the AuthenticatedRouteMixin to the extend rout to protect it unless logged in
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin,{
 model() {
   return this.get('store').findAll('grant');
 },
   actions: {
    didTransition: function() {
       Ember.$(".moderatorHolder").show();
    }
  }

});
