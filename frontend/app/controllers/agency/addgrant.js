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
                    grant.save().then(() => {
                        Ember.$.bootstrapGrowl("Succesfully created grant number" + grant_number + ", { type: 'success', align: 'center' , width: 400, hight: 40 });
                        this.transitionToRoute('agency.overview');
                    });
                });
            });
        }
    }
});
