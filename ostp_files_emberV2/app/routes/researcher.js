import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      validateForm: function () {
        //this.controller.get("isFileUploaded")
        this.controller.set("isFileUploaded" , true);
      }
    },
    model() {
      return this.store.peekAll('grant');
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', false);

  }
});
