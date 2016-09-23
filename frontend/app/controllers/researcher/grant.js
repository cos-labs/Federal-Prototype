import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    active_grant: null,
    document: {},
    departments: {},
    actions: {
        addGrant(grant_id, department_id) {
            debugger;
            var dep = this.get('store').peekRecord('department', department_id);
            var grant = this.get('store').createRecord('grant')
            grant.set('department', dep)
            grant.set('document', this.get('document'))
            grant.set('questions', dep.toJSON().settings);
            grant.set('institutions'i)
            grant.save();
            this.set('active_grant', grant)
            var grants = this.get('grants');
            grants.push(grant);
            this.set('grants', grants.slice());
            this.transitionToRoute('researcher.metadata')
        }
    }
});
