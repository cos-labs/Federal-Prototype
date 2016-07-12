import Ember from 'ember';

export default Ember.Component.extend( {

  store: Ember.inject.service(),

  //vars
  page: 'main',
  department: null,
  grantNumber: '',

  init: function() {
    this._super(...arguments);
  },
  actions: {

    selectDepartment(value) {
      console.log("SELECTED DEPARTMENT");
      this.set('department', value);
    },
    updateGrantNumber(value) {
      console.log("UPDATED NUMBER");
      this.set('grantNumber', value);
    },
    submit() {
//      var g = this.get('store').createRecord('grant', {
      this.get('store').createRecord('grant', {
        department: this.get('department'),
        number: this.get('grantNumber')
      });
      this.sendAction("validateForm" , "researcher-form");
      // g.save();
    }
  }
});
