import Ember from 'ember';


export default Ember.Route.extend( {

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions: {
      submit(files, grant) {

        var store = this.get('store');
        var folderid = "57e6cdae0dc31001c9a9f41a";
        var fm = this.get('fileManager');
        var controller = this.controller;

        store.findRecord('file', folderid).then(function(folder) {
          var file = files.pop();
          let nf = fm.uploadFile(folder, file.name, file);
          return nf.then((file) => {
            return file;
          });
        }).then(function(newFile) {
          var name = newFile.get('name');
          var path = newFile.get('path');
          grant.set('document.name', name);
          grant.set('document.path', path);
          grant.save().then( function() {
           controller.transitionToRoute('researcher.inbox');
          });
        }).then(function(){}, function(error) {
          console.log("Oops: " + error.message);
        });
      }
    },

    //model() {
      //return this.modelFor('researcher');
    //},
    setupController(controller, model) { //jshint ignore:line
      //controller.set('fileList', [{}]);  
      //this._super(controller, model);
      //controller.set('isFileUploaded', "researcher-form");
    }
});
