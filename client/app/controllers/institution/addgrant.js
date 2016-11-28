import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    agencies: {},
    actions: {
        createGrant(agency_id, grant_number, pi_name) {
            var agency = this.get('store').peekRecord('agency', agency_id);
            var doc = this.get('store').createRecord('document');
            doc.set('name', 'Not Uploaded');
            doc.set('path', '/dev/null');
            doc.set('datesubmitted', 'Thursday, 1 January 1970');
            doc.save().then((doc) => {
                var grant = this.get('store').createRecord('grant');
                grant.set('number', grant_number);
                grant.set('agency', agency);
                grant.set('pi', pi_name);
                grant.set('schema', dep.toJSON().schema);
                grant.set('institution', true);
                grant.set('document', doc);
                grant.save().then(() => {
                    Ember.$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center' , width: 400, hight: 40 });
                    this.transitionToRoute('institution.overview');
                });
            });
        }
    }
});
