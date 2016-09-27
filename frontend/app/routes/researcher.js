
import Ember from 'ember';
import OsfCookieLoginRouteMixin from 'ember-osf/mixins/osf-cookie-login-route';
//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(OsfCookieLoginRouteMixin, {
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      document: this.get('store').createRecord('document'),
    });
  },
});
