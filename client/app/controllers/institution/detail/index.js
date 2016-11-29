
import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    role: 'institution',
    //active_grant: null,
    //document: {},
    agencies: {},
    actions: {
        getGrantsPage(page_number) {
            console.log('getting grants');
            console.log(page_number);
            this.get('store').query('grant', {
                'institution': true,
                'page': page_number
            }).then((grants) => {
                this.set('grants', grants);
            });
        },

        createGrant(agency_id, grant_number, pi_name) {
            var agency = this.get('store').peekRecord('agency', agency_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('number', grant_number);
            grant.set('agency', agency);
            grant.set('pi', pi_name);
            grant.set('schema', agency.toJSON().schema);
            grant.set('institution', true);
            this.store.findRecord('document', 125).then((r) => {
                grant.set('document', r);
                grant.save();
                //this.set('active_grant', grant)
                var grants = this.get('grants');
                grants.push(grant);
                this.set('grants', grants.slice());
            });
        }
    }
});
