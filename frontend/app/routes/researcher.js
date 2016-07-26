import Ember from 'ember';

export default Ember.Route.extend({

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),

    actions: {
      // saveGrant(grant, departmentId, document) {
      //   // grant.save();
      //   console.log('g number: ', grant.get('number'));
      //   console.log('looking for department with id: ', departmentId);
      //   this.get('store').findRecord('department', departmentId)
      //     .then( function(d) {
      //       if (d === null) {
      //         console.log('no department found (null)');
      //       }
      //       d.get('grants').pushObject(grant);
      //       console.log();
      //       // grant.set('department', d.get('id'));
      //       console.log('dept object:', grant.get('department').get('name'));
      //     }).then( function() {
      //       grant.save();
      //     }
      //   );
      // },
      submit(grant, departmentId, fileList, document) {
        
        var store = this.get('store');
        var folderid = "57878c5e8ca57e01e4774a90";
        var fm = this.get('fileManager');
        var department = this.get('store').peekRecord('department', departmentId);

        store.findRecord('file', folderid).then(function(folder) {
          var file = fileList.pop();
          let nf = fm.uploadFile(folder, file.name, file);
          return nf.then((file) => {
            return file;
          });

        }).then(function(newFile) {
          var name = newFile.get('name');
          var path = newFile.get('path');
          document.set('name', name);
          document.set('path', path);
          document.save()
            .then( function() {
              grant.set('department', department);
              grant.set('document', document);
              grant.save()
                .then((doc) => {
                  return doc;
                });
            });
        }).then(null, function(error) {
          console.log("Oops: " + error.message);
        });
      }
    },
    model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      document: this.get('store').createRecord('document'),
      grant: this.get('store').createRecord('grant'),
    });
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', "researcher-form");
  }
});
