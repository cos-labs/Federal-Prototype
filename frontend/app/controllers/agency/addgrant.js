import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    //active_grant: null,
    //document: {},
    departments: {},
    actions: {
        addGrant(department_id, grant_number, pi_name) {
            this.get('store').findRecord('department', 3).then((dep) => {
                var grant = this.get('store').createRecord('grant');
                grant.set('number', grant_number);
                grant.set('department', dep);
                grant.set('pi', pi_name);
                grant.set('questions', dep.toJSON().settings);
                grant.set('institution', true);
                this.store.findRecord('document', 117).then((r) => {
                    grant.set('document', r);
                    grant.save();
                    //this.set('active_grant', grant)
                    var grants = this.get('grants');
                    grants.push(grant);
                    this.set('grants', grants.slice());
                });
            });
        }
    }
});
