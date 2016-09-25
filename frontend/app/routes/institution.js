import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    //model() {
    //    return Ember.RSVP.hash({
    //        grants: this.get('store').query('grant', {
    //            institution: true,
    //        }),
    //        departments: this.get('store').findAll('department'),
    //    });
    //}

});
