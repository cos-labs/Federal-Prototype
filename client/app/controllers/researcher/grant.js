import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    active_grant: null,
    session: Ember.inject.service('session'),
    currentUser: Ember.inject.service(),
    user: {},
    document: {},
    agencies: {},
    actions: {
        submit() {
            console.log('done');
            this.transitionToRoute('researcher.overview');
        },
        edit() {
            console.log('hello');
            this.transitionToRoute('researcher.metadata');
        },
        addGrant(grant_id, agency_id, grantNumber) {
            var agency = this.get('store').peekRecord('agency', agency_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('agency', agency);
            grant.set('document', this.get('document'));
            grant.set('schema', null);
            grant.set('number', grantNumber);
            this.get('currentUser').load().then((c) => {
                this.set('user', c);
                grant.set('pi', c.get('id'));
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
