define('ostp-files-ember-v2/components/researcher-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),

    //vars
    page: 'main',
    department: null,
    grantNumber: 123,

    init: function init() {
      this._super.apply(this, arguments);
    },
    actions: {

      selectDepartment: function selectDepartment(value) {
        console.log("SELECTED DEPARTMENT");
        this.set('department', value);
      },
      updateGrantNumber: function updateGrantNumber(value) {
        console.log("UPDATED NUMBER");
        this.set('grantNumber', value);
      },
      validateForm: function validateForm() {
        this.sendAction("validateForm");
      },
      submit: function submit() {
        //      var g = this.get('store').createRecord('grant', {
        this.get('store').createRecord('grant', {
          department: this.get('department'),
          number: this.get('grantNumber')
        });
        // g.save();
      }
    }
  });
});