import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.get('store').findAll('institution').then((ret) => {
            return ret;
        });
        //let b = this.get('store').findAll('grant').then((ret) => {
        //});
        //return this.get('store').query('agency', {
            //filter: {
            //    permission: 'administer'
            //}
        //})
        //return a;
    },

    setupController(controller, model) {
        controller.set('institutions', model);
    }

});
