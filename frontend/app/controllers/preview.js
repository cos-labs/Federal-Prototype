
import Ember from 'ember';

export default Ember.Controller.extend({

    path: undefined,
    back: undefined,

    actions: {

        fetch(grant) {
            console.log(grant);
            this.set('path', "https://staging-files.osf.io/v1/resources/s5mvu/providers/osfstorage" + grant.get('document').get('path'));
        }

    }

});        

