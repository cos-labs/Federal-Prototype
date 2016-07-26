import Ember from 'ember';

export default Ember.Route.extend({
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
            console.log()
            // grant.set('department', d.get('id'));
            console.log('dept object:', grant.get('department').get('name'));
          }).then( function() {
            grant.save();
          }
        );
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
