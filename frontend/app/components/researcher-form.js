import Ember from 'ember';

export default Ember.Component.extend( {
  
  //vars
  page: 'main',
  departmentId: -1,
  actions: {

    buttonClicked(param1, param2, param3) {
      this.sendAction('action', param1, param2, param3);
    }

  }
});




