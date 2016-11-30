import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        let a = this.get('store').findAll('agency').then((ret) => {
            return ret;
        });
        //return this.get('store').query('agency', {
            //filter: {
            //    permission: 'administer'
            //}
        //})
        return a;
    },

    setupController(controller, model) {
        controller.set('agency', model);
    }

});
