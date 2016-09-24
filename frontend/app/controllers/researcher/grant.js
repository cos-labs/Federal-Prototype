import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    active_grant: null,
    session: Ember.inject.service('session'),
    currentUser: Ember.inject.service(),
    user: {},
    document: {},
    departments: {},
    actions: {
        addGrant(grant_id, department_id, grantNumber) {
            var dep = this.get('store').peekRecord('department', department_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('department', dep);
            grant.set('document', this.get('document'));
            grant.set('questions', dep.toJSON().settings);
            grant.set('number', grantNumber);
            this.get('currentUser').load().then((c) => {
                this.set('user', c);
                grant.set('pi', c.get('fullName'));
                grant.save();
                this.set('active_grant', grant);
                var grants = this.get('grants');
                grants.push(grant);
                this.set('grants', grants.slice());
                this.transitionToRoute('researcher.metadata');
            });
        }
    }
});
