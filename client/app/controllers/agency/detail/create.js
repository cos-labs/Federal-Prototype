import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    //active_grant: null,
    //document: {},
    agencies: {},
    actions: {
        addGrant(agency_id, grant_number, pi_name, institutionId) {
            debugger;
            var grant = this.get('store').createRecord('grant');
            grant.set('number', grant_number);
            grant.set('agency', this.get('agency'));
            grant.set('pi', pi_name);
            grant.set('schema', null);
            grant.set('institution', this.get('institution', institutionId));
            grant.set('document', null);
            grant.save().then(() => {
                Ember.$.bootstrapGrowl("Succesfully created grant number " + grant_number + ".", { type: 'success', align: 'center' , width: 400, hight: 40 });
                this.transitionToRoute('agency.overview', institution);
            });
        }
    }
});
