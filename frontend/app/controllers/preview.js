
import Ember from 'ember';

export default Ember.Controller.extend({

    filename: undefined,
    path: undefined,

    actions: {
        fetch(grant) {
            this.set('path', "https://staging-files.osf.io/v1/resources/s5mvu/providers/osfstorage" + grant.get('document').get('path'));
            this.set('filename', grant.get('document').get('name'));
        }
    }

});        

