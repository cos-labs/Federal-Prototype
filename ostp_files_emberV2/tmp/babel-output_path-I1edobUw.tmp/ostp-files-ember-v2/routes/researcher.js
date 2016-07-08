define('ostp-files-ember-v2/routes/researcher', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      validateForm: function validateForm() {
        //this.controller.get("isFileUploaded")
        this.controller.set("isFileUploaded", true);
      }
    },
    model: function model() {
      return _ember['default'].RSVP.hash({
        departments: this.get('store').findAll('department'),
        grants: this.get('store').findAll('grant')
      });
    },
    setupController: function setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', false);
    }
  });
});