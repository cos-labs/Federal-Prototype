import Ember from 'ember';

export default Ember.Controller.extend({
    lastUpdated: new Date(),
    actions: {
        update(time) {
            this.set('lastUpdated', time);
        }
    }
});
