import Ember from 'ember';

export default Ember.Route.extend( {

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions: {
        agencySelected(agencyId) {
            this.get('store').getRecord('agency', agencyId);
        },
    },

    model() {
        var researcher = this.modelFor('researcher');
        return Ember.RSVP.hash({
            document: researcher.document,
            agency: this.get('store').findAll('agency'),
            grants: this.get('store').findAll('grant')
        });
    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('isFileUploaded', "researcher-form");
        var grants = model.grants.reduce(function(r, n) {
            console.log(n);
            console.log(n.get);
            console.log(n.get('document'));
            console.log(n.get('document.id'));

            //if (!n.get('document') || n.get('document').get('id') === model.document.get('id')) { r.push(n); }
            return r;
        }, []);
        controller.set('grants', grants);
        controller.set('document', model.document);
        controller.set('agencies', model.agency);  
    }
});

