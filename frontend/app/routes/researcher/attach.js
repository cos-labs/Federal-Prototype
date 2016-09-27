import Ember from 'ember';


export default Ember.Route.extend( {

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions: {
        submit(files, grant) {

            var store = this.get('store');
            var folderid = "57e6cdae0dc31001c9a9f41a";
            var controller = this.controller;
            var fm = this.get('fileManager')

            store.findRecord('file', folderid).then((folder) => {
                return fm.uploadFile(folder, files[0].name, files[0])
                    .then((file) => {
                        return file;
                });
            }).then(function(newFile) {
                var name = newFile.get('name');
                var path = newFile.get('path');
                grant.get('document');
                grant.set('document.name', name);
                grant.set('document.path', path);
                grant.save().then( function() {
                    controller.transitionToRoute('researcher.overview');
                });
            }).then(function(){}, function(error) {
                console.log("Oops: " + error.message);
            });
        
        }
    },

});
