
import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    agency: true,
    institution: false,
    role: 'agency',
    //active_grant: null,
    //document: {},
    agencies: {},
    actions: {
        createGrant(agency_id, grant_number, pi_name) {
            var grant = this.get('store').createRecord('grant');
            this.get('store').findRecord('agency', 4).then((agency) => {
                grant.set('number', grant_number);
                grant.set('agency', agency);
                grant.set('pi', pi_name);
                grant.set('schema', dep.toJSON().schema);
                grant.set('institution', true);
                this.store.findRecord('document', 125).then((r) => {
                    grant.set('document', r);
                    grant.save();
                    //this.set('active_grant', grant)
                    //var grants = this.get('grants');
                    //grants.push(grant);
                    //this.set('grants', grants.slice());
                });
            });
        },
        getGrantsPage(page_number) {
            console.log('getting grants');
            console.log(page_number);
            this.get('store').query('grant', {
                'agency': 4,
                'page': page_number
            }).then((grants) => {
                this.set('grants', grants);
            });
        },
    },
});        

