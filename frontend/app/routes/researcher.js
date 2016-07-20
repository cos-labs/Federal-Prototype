import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      validateForm: function (component) {
         if(component === "researcher-form"){
              this.controller.set("isFileUploaded" , "meta-data");
         }else if(component === "meta-data"){
              this.controller.set("isFileUploaded" , "successful-upload");
         }
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
      controller.set('isFileUploaded', "researcher-form");
  }
});
