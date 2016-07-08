import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      validateForm: function () {
        //this.controller.get("isFileUploaded")
        this.controller.set("isFileUploaded" , true);
      }
    },
    model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      grants: this.get('store').findAll('grant')
    });
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', false);
  }
});
