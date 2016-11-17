
import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    actions: {
        getGrantsPage(page_number) {
            console.log('getting grants');
            console.log(page_number);
            this.get('store').query('grant', {
                'pi': 'Jeff Spies', 
                'page': page_number
            }).then((grants) => {
                this.set('grants', grants);
            });
        }
    }
});
