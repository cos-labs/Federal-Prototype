import Ember from 'ember';

export default Ember.Component.extend( {

  store: Ember.inject.service(),
  fileManager: Ember.inject.service(),

  //vars
  page: 'main',
  department: null,
  grantNumber: '',

  init: function() {
    this._super(...arguments);
  },

  actions: {

    selectDepartment(value) {
      this.set('department', value);
    },

    updateGrantNumber(value) {
      this.set('grantNumber', value);
    },

    submit(fileList) {
      let folderid = "57878c5e8ca57e01e4774a90";
      let fm = this.get('fileManager');
      let testfolder = this.get('store').findRecord('file', folderid).then(function(testfolder) {
        let name = "Test Subfolder";
        fm.addSubfolder(testfolder, name);
        // while (fileList && fileList.length) {
        //   let file = fileList.pop();
        //   fm.uploadFile(testfolder, file.name, file);
        // }
      })

      this.get('store').createRecord('grant', {
        department: this.get('department'),
        number: this.get('grantNumber')
      });
      this.sendAction("validateForm" , "researcher-form");
    },
  }
});




