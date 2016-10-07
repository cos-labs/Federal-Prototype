import Ember from 'ember';
//add this and the AuthenticatedRouteMixin to the extend rout to protect it unless logged in


export default Ember.Route.extend({
    currentUser: Ember.inject.service(),
    model() {
            pi_guid = this.get('currentUser').load().then((user) => {
                debugger;
                return user.id;
            });
            
            grants = this.get('store').query('grant', {
                pi: pi_guid
            })
            return Ember.RSVP.hash({
                grants: this.get('store').query('grant', { pi: this.get()}),
                documents: this.get('store').findAll('document'),
                institutions: [
                    'UVA',
                    'HARVARD',
                    'CALTECH',
                    'MIT'
                ],
            });
    },

    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        },
        didRender: function() {

            //let tour = new Shepherd.Tour({ // jshint ignore:line
            //    defaults: {
            //        classes: 'shepherd-theme-arrows'
            //    }
            //});

            //var step = tour.addStep('upload', {
            //    title: 'Upload your research.',
            //    text: 'Use our upload tool to upload and connect your research to existing grants or a new grant, and add metadata about the grant.',
            //    attachTo: '#uploadhere left',
            //    advanceOn: '.docs-link click'
            //});

            //tour.start();

            //setTimeout((e) => {
            //    if (step.isOpen()) {
            //        Shepherd.activeTour.next();
            //    }
            //}, 6000);

        },
    },

    setupController(controller, model) {
        controller.set('agency', true);
        controller.set('role', 'pi');
        controller.set('grants', model.grants);
        controller.set('documents', model.documents);
        controller.set('institutions', model.institutions);
    },





});
