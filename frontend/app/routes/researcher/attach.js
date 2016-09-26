import Ember from 'ember';


export default Ember.Route.extend( {

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions: {
      submit() {

        //var store = this.get('store');
        //var folderid = "57e6cdae0dc31001c9a9f41a";
        //var fm = this.get('fileManager');
        var controller = this.controller;

        //store.findRecord('file', folderid).then(function(folder) {
        //  var file = fileList.pop();
        //  let nf = fm.uploadFile(folder, file.name, file);
        //  return nf.then((file) => {
        //    return file;
        //  });
        //}).then(function(newFile) {
         // var name = newFile.get('name');
         // var path = newFile.get('path');
         // doc.set('name', name);
         // doc.set('path', path);
         // doc.save().then( function() {
           controller.transitionToRoute('researcher.inbox');
         // });
        //}).then(function(){}, function(error) {
         // console.log("Oops: " + error.message);
        //});
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
