
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      document: this.get('store').createRecord('document'),
    });
  }
});
