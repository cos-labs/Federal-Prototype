import Ember from 'ember';

export default Ember.Controller.extend({
  //vars
  page: 'main',
  department: null,
  departments: ["", "D.O.T (Department of Transportation)" , "D.O.D (Department of Defense)" , "D.O.E (Department of Energy)" , "N.I.H (National Institutes of Health)"],


  actions: {
    nextPage(page) {
     if(page == "main"){
       this.set('page' , 'components/funding-select');
     }else if(page == "funding-select"){
       this.set('page' , 'components/grant-select');
     }else if(page == "grant-select"){
       this.set('page' , 'components/upload-file');
     }else if(page == "upload-file"){
       this.set('page' , 'components/meta-data');
     }else if(page == "meta-data"){
       this.set('page' , 'components/file-success');
     }else if(page == "file-success"){
       this.set('page' , 'main');
     }
    },
     selectDepartment(department) {
     this.set('department', department);
     console.log(this.set('department', department));
    },
    addDepartmentSelect() {
        $(".select").last().clone().appendTo(".selectlist");
    }

  }
});



