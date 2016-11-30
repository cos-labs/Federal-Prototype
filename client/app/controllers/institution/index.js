import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Select',
    grants: [],
    institutions: [],
    agency: false,
    agencies: {},
    actions: {
        viewGrants(institution) {
 //            var agency = this.get('store').peekRecord('agency', agency_id);
 //            var doc = this.get('store').createRecord('document');
 //            doc.set('name', 'Not Uploaded');
 //            doc.set('path', '/dev/null');
 //            doc.set('datesubmitted', 'Thursday, 1 January 1970');
 //            doc.save().then((doc) => {
 //                var grant = this.get('store').createRecord('grant');
 //                grant.set('number', grant_number);
 //                grant.set('agency', agency);
 //                grant.set('pi', pi_name);
 //                grant.set('schema', dep.toJSON().schema);
 //                grant.set('institution', true);
 //                grant.set('document', doc);
 //                grant.save().then(() => {
 //                    Ember.$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center' , width: 400, hight: 40 });
                    this.transitionToRoute('institution.detail', institution);
 //                });
 //            });
        }
    }
});
