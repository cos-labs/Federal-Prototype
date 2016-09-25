import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
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
            this.store.findRecord('document', 125).then((r) => {
                grant.set('document', r);
                grant.save().then((r) => {
                    Ember.$.bootstrapGrowl("Successfully added new grant!", { type: 'success', align: 'center' , width: 400, hight: 40 });
                    this.transitionToRoute('institution.overview');
                });
            });
        }
    }
});
