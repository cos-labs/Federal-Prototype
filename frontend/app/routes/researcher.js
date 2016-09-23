import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
 store: Ember.inject.service(),
 session: Ember.inject.service(),
 beforeModel: function() {
    if(document.location.pathname === "/researcher/grant"){ this.transitionTo('researcher.grant'); }
    else if(document.location.pathname === "/researcher/metadata"){ this.transitionTo('researcher.metadata'); }
    else if(document.location.pathname === "/researcher/success"){ this.transitionTo('researcher.success'); }
    else if(document.location.pathname === "/researcher/inbox"){ this.transitionTo('researcher.inbox'); }
    else{this.transitionTo('researcher.grant'); }
  },
  model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      document: this.get('store').createRecord('document'),
      grant: this.get('store').createRecord('grant'),
    });
    },
});


