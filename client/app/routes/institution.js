import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        let a = this.get('store').findAll('institution').then((ret) => {
            debugger;
        });
        let b = this.get('store').findAll('grant').then((ret) => {
            debugger;
        });
        //return this.get('store').query('agency', {
            //filter: {
            //    permission: 'administer'
            //}
        //})
    },

    setupController(controller, model) {
        controller.set('institutions', model);
    }

});
