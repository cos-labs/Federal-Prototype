
import Ember from 'ember';

export default Ember.Controller.extend({

    file: undefined,
    back: undefined,

    actions: {

        fetch(grant) {
            console.log(grant);
            debugger;
        }

    }

});        

