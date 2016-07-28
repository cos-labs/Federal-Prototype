import Ember from 'ember';

export default Ember.Route.extend({

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),

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
              grant.save()
                .then((g) => {
                  console.log(grant.get('questions'));
                  console.log(g.get('questions'));
                  grant = g;
                })
                .then(() =>           controller.transitionToRoute('researcher.metadata'));
            });
        }).then(function() {
        }, function(error) {
          console.log("Oops: " + error.message);
        });
      }
    },
//    model() {
//      return Ember.RSVP.hash({
//      departments: this.store.findAll('department'),
//      document: this.store.createRecord('document'),
//      grant: this.store.createRecord('grant',
//        {
////          questions: '{  "schema": {    "title":"Describe the document",    "description":"The meta data associated with the document that was uploaded.",    "type":"object",    "properties": {      "document-name": {        "type":"string",        "title":"Document Name"      },      "date-published": {        "type":"string",        "title":"Date Published"      },      "publisher": {        "type":"string",        "title":"Publisher"      },      "institution": {        "type":"string",        "title":"institution"      },      "pi": {        "type":"string",        "title":"Principal Investigator"      },      "pi-email": {        "type":"string",        "title":"Principal Investigator Email"      },      "author-list": {        "type":"string",        "title":"Author(s)"      }    }  },  "options": {    "helper": "The meta data associated with the document that was uploaded.",    "fields": {      "document-name": {        "size": 256,        "helper": "Please enter the documents name.",        "placeholder": "documents name",        "focus" : false      },     "date-published": {       "format": "date-time",        "helper": "Please enter when the document was published.",        "placeholder": "e.g. 5/5/1995"      },     "publisher": {        "size": 256,        "helper": "Please enter the publisher.",        "placeholder": "Publisher"      },     "institution": {        "size": 256,        "helper": "Please enter the institution.",        "placeholder": "Institution"      },     "pi": {        "size": 156,        "helper": "Please enter the Principal Investigator.",        "placeholder": "e.g. John Doe"      },     "pi-email": {        "format": "email",        "size": 256,        "helper": "Please enter the Principal Investigator Email address.",        "placeholder": "e.g. JohnDoe@mail.com"      },     "author-list": {        "size": 256,        "helper": "Please enter the auther(s), if you have more than author use commas to separate them.",        "placeholder": "e.g. Cameron, Blandford Carolyn Stewart, Ryan Mason"      }    }  }}'
//        }
//      )
//    });
//    },
    model() {
      return this.modelFor('researcher');
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', "researcher-form");
  }
});
