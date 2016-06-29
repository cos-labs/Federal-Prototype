import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  //vars
  page: 'main',
  department: null,
  departments: ["Plase Select Funding", "D.O.T (Department of Transportation)" , "D.O.D (Department of Defense)" , "D.O.E (Department of Energy)" , "N.I.H (National Institutes of Health)"],

init: function() {
    this._super(...arguments);
    var store = this.get('store');
    store.createRecord('grant');
  },
  actions: {
    selectDepartment(g , value) {
      console.log(g , value.target.value);

      g.set('grantDepartmentName' , value.target.value);

    },
    addDropDown() {
       // $(".departmentSelect").last().clone().appendTo(".dropdownHolder");

       // $(".grantNumber").last().clone().appendTo(".grantNumberHolder");


        var store = this.get('store');
        store.createRecord('grant');


    }
  }
});
