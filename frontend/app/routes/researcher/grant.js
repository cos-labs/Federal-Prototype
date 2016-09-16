import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    fileManager: Ember.inject.service(),
    //store: Ember.inject.service(),
    //session: Ember.inject.service(),
    
    actions: {
      submit(grant, departmentId, fileList, document) {

        var store = this.get('store');
        var folderid = "57878c5e8ca57e01e4774a90";
        var fm = this.get('fileManager');
        var department = this.get('store').peekRecord('department', departmentId);
        var controller = this.controller;

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
             // grant.set('status');
              grant.save()
                .then((g) => {
                  grant = g;
                })
                .then(() => controller.transitionToRoute('researcher.metadata'));
            });
        }).then(function() {
        }, function(error) {
          console.log("Oops: " + error.message);
        });
      }
    },

    model() {
      return this.modelFor('researcher');
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', "researcher-form");
  }
});
