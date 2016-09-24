import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    //active_grant: null,
    //document: {},
    departments: {},
    actions: {
        createGrant(department_id, grant_number, pi_name) {
            var dep = this.get('store').peekRecord('department', department_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('number', grant_number);
            grant.set('department', dep);
            grant.set('pi', pi_name);
            grant.set('questions', dep.toJSON().settings);
            grant.set('institution', true);
            this.store.findRecord('document', 22).then((r) => {
                grant.set('document', r);
                // grant.save();
                grant.save().then((r) => {
                    //growl notification (success!)
                    Ember.$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center' , width: 400, hight: 40 });
                    this.transitionToRoute('institution.overview');
                    //transition to overview
                });
                //this.set('active_grant', grant)
                // var grants = this.get('grants');
                // grants.push(grant);
                // this.set('grants', grants.slice());
            });
        }
    }
});
