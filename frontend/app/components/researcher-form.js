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


    testsubmit(fileList) {
      var store = this.get('store');
      var folderid = "57878c5e8ca57e01e4774a90";
      var fm = this.get('fileManager');
      var department = this.get('department');
      var number = this.get('number');

      store.findRecord('file', folderid).then(function(folder) {
        var file = fileList.pop();
        var nf = fm.uploadFile(folder, file.name, file);
        return nf;

      }).then(function(newFile) {
        console.log(newFile);
        var name = newFile.get('name');
        var path = newFile.get('path');
        var doc = store.createRecord('document', {
          name: name,
          path: path,
        });
        doc.save();
        return doc;

      }).then(function(doc) {
        console.log("hi number three");
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

    // submit(fileList) {
    //   var folderid = "57878c5e8ca57e01e4774a90";
    //   var fm = this.get('fileManager');
    //   var department = this.get('department');
    //   var store = this.get('store');
    //   var doc;
    //   var testfolder = this.get('store').findRecord('file', folderid).then(function(testfolder) {
    //     while (fileList && fileList.length) {
    //       var file = fileList.pop();
    //       var newFile = fm.uploadFile(testfolder, file.name, file).then(function(newFile) {
    //         // console.log(newFile.get('path'));
    //         // console.log(newFile);
    //         doc = store.createRecord('document', {
    //           // name: newFile.get('name'),
    //           // path: newFile.get('path'),
    //           name: "testname",
    //           path: "testpath",
    //           //department: department,
    //         });
    //         doc.save();
    //       });
    //     }
    //   });

    //   this.get('store').createRecord('grant', {
    //     department: this.get('department'),
    //     number: this.get('grantNumber')
    //   });
    //   this.sendAction("validateForm" , "researcher-form");
    // },
  }
});




