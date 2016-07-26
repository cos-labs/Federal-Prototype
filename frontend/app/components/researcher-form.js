import Ember from 'ember';

export default Ember.Component.extend( {

  store: Ember.inject.service(),
  fileManager: Ember.inject.service(),

  //vars
  page: 'main',

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
      var store = this.get('store');
      var folderid = "57878c5e8ca57e01e4774a90";
      var fm = this.get('fileManager');
      var department = this.get('department');
      var number = this.get('grantNumber');

      store.findRecord('file', folderid).then(function(folder) {
        var file = fileList.pop();
        let nf = fm.uploadFile(folder, file.name, file);
        return nf.then((file) => {
          return file;
        });

      }).then(function(newFile) {
        var name = newFile.get('name');
        var path = newFile.get('path');
        var doc = store.createRecord('document', {
          name: name,
          path: path,
        });
        doc.save();
        return doc;

      }).then(function(doc) {

        var grant = store.createRecord('grant', {
          department: department,
          number: number,
          document: doc,

        });
        grant.save();
        return grant;

      }).then(null, function(error) {
        console.log("Oops: " + error.message)
      });

      this.sendAction("validateForm", "researcher-form");

    },
  }
});




