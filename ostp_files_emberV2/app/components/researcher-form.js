import Ember from 'ember';

export default Ember.Component.extend( {

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
      g.set('grantDepartmentName' , value.target.value);
    },
    selectGrantNumber(g , value) {
      g.set('grantNumber' , value.target.value);

    },saveToModel(){
      console.log('hry');
    },
    addDropDown() {
        var store = this.get('store');
        store.createRecord('grant');
    },
    buildUrl() {
        return this.get('_url');
    },
    preUpload(comp, drop, file) {
        this.set('openModal', true);
        this.set('latestFileName', file.name);
        var promise = new Ember.RSVP.Promise(resolve => {
            this.set('resolve', resolve);
        });
       return promise;
    },
    validateForm(g){
      g.save();
      console.log(g.grantNumber);

      for(var i=0; i <= $('.departmentSelect').length; i++ ){
        console.log(store.peekAll('grant').objectAt(i).get("grantDepartmentName"));
        console.log(store.peekAll('grant').objectAt(i).get("grantNumber"));
      }
    }
  }
});
