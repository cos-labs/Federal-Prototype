import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    agencies: {},
    actions: {
        createGrant(agency_id, grant_number, pi_name) {
            var agency = this.get('store').peekRecord('agency', agency_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('agency', agency);
            grant.set('schema', null);
            grant.set('institution', this.get('institution').id);
            grant.set('number', grant_number);
            grant.set('pi', pi_name);
            var grants = this.get('grants');
            grants.push(grant);
            this.set('grants', grants.slice());
            grant.save();
            Ember.$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center' , width: 400, hight: 40 });
            this.transitionToRoute('institution.detail');
        }
    }
});
