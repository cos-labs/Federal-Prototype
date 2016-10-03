import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    //active_grant: null,
    //document: {},
    agencies: {},
    actions: {
        addGrant(agency_id, grant_number, pi_name) {
            this.get('store').findRecord('agency', 4).then((agency) => {
                var grant = this.get('store').createRecord('grant');
                grant.set('number', grant_number);
                grant.set('agency', agency);
                grant.set('pi', pi_name);
                grant.set('schema', dep.toJSON().schema);
                grant.set('institution', true);
                this.store.findRecord('document', 125).then((r) => {
                    grant.set('document', r);
                    grant.save().then(() => {
                        Ember.$.bootstrapGrowl("Succesfully created grant number " + grant_number + ".", { type: 'success', align: 'center' , width: 400, hight: 40 });
                        this.transitionToRoute('agency.overview');
                    });
                });
            });
        }
    }
});
