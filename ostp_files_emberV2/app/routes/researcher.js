import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      grants: this.get('store').findAll('grant')
    });
  }
});
