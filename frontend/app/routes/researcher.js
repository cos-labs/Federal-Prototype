import Ember from 'ember';

export default Ember.Route.extend({

    fileManager: Ember.inject.service(),
    store: Ember.inject.service(),

    actions: {
      saveGrant(grant, departmentId, document) {
        // grant.save();
        console.log('g number: ', grant.get('number'));
        console.log('looking for department with id: ', departmentId);
        this.get('store').findRecord('department', departmentId)
          .then( function(d) {
            if (d === null) {
              console.log('no department found (null)');
            }
            d.get('grants').pushObject(grant);
            console.log();
            // grant.set('department', d.get('id'));
            console.log('dept object:', grant.get('department').get('name'));
          }).then( function() {
            grant.save();
          }
        );
      },
      submit(grant, departmentId, fileList) {
        
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
          console.log('grant.document: ', grant.document);
          console.log('grant.get(\'document\'): ', grant.get('document'));
          console.log('grant.get(document.name): ', grant.get('document.name'));
          console.log('name: ', name);
          console.log('path: ', path);

          // grant.set('document.name', newFile.get('name'))
          //   .then(() => grant.set('document.path', newFile.get('path')), (error) => console.log(error.message))
          //   .then(() => grant.get('document').save())
          //   .then((doc) => {
          //     return doc;
          //   });
          grant.set('document.name', name);
          grant.set('document.path', path);
          grant.set('department', department);
          console.log('about to ~get~ document');
          var d = grant.get('document');
          console.log('successful get!');
          console.log('d: ', d);
          d.save();
          grant.save()
            .then((doc) => {
              return doc;
            });


        }).then(function(doc) {
          //
          // var grant = store.createRecord('grant', {
          //   department: department,
          //   number: number,
          //   document: doc,
          //
          // });
          doc.get('grants').push(grant);
          grant.save();
          return grant;

        }).then(null, function(error) {
          console.log("Oops: " + error.message)
        });
      }
    },
    model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      grant: this.get('store').createRecord('grant',
        {
          document: this.get('store').createRecord('document')
        }
      ),
    });
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', "researcher-form");
  }
});
