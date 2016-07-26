import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      saveGrant(grant, departmentId, document) {
        // grant.save();
        console.log('g number: ', grant.get('number'));
        // console.log('g status: ', grant.status);
        console.log('getting department based on grant.departmentid');
        console.log('peeking for department with id: ', departmentId);
        this.get('store').findRecord('department', departmentId)
          .then( function(d) {
            if (d === null) {
              console.log('no department found (null)');
            }
            d.get('grants').pushObject(grant);
            // grant.set('department', d);
            console.log('dept object:', grant.get('department').get('name'));
          }).then( function() {
            grant.save();
          }
        );
        // console.log('setting dept to that number');
        // grant.set('department', dept);
        // console.log('attempting save of: ', grant);
        console.log('depID: ', departmentId);
      }
    },
    model() {
      return Ember.RSVP.hash({
      departments: this.get('store').findAll('department'),
      grant: this.get('store').createRecord('grant',
        {
          document: this.get('store').createRecord('document')
        }
      )
    });
    },
    setupController(controller, model) {

      this._super(controller, model);
      controller.set('isFileUploaded', "researcher-form");
  }
});
