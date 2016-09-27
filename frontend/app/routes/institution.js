import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';4   

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
});
