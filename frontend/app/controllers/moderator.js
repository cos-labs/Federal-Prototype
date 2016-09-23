import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    agency: true,
    //active_grant: null,
    //document: {},
    departments: {},
    actions: {
        createGrant(department_id, grant_number, pi_name) {
            var grant = this.get('store').createRecord('grant');
            debugger;
            this.get('store').findRecord('department', 3).then((dep) => {
                debugger;
                grant.set('number', grant_number);
                grant.set('department', dep);
                grant.set('pi', pi_name);
                grant.set('questions', dep.toJSON().settings);
                grant.set('institution', true);
                this.store.findRecord('document', 117).then((r) => {
                    debugger;
                    grant.set('document', r);
                    grant.save();
                    //this.set('active_grant', grant)
                    //var grants = this.get('grants');
                    //grants.push(grant);
                    //this.set('grants', grants.slice());
                });
            });
        }
    }
});
