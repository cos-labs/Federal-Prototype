import Ember from 'ember';
//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

import OsfCookieLoginRouteMixin from 'ember-osf/mixins/osf-cookie-login-route';
//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(OsfCookieLoginRouteMixin, {

//export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    //model() {
    //    return Ember.RSVP.hash({
    //        grants: this.get('store').findAll('grant'),
    //        departments: this.get('store').findAll('department'),
    //    });
   // }

});
