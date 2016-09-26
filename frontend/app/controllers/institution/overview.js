
import Ember from 'ember';

export default Ember.Controller.extend({
    grants: [],
    institution: true,
    agency: false,
    role: 'institution',
    //active_grant: null,
    //document: {},
    departments: {},
    actions: {
        nextPage() {
            //try {
            //var newPage = this.get('currentPage')+1
             //   this.set('currentPage', newPage);
                
             //   if (this.get('role') == 'institution') {
             //       var grants = this.store.query('grants', {
             //           institution: true,
             //           page: this.get('currentPage'),
             //       }).then((gs) => {
             //           this.set('model', gs);
             //       });
             //   }
             //   if (this.get('role') == 'pi') { 
             //       var grants = this.store.query('grants', {
             //           pi: "Cameron Blandford",
             //           page: this.get('currentPage'),
             //       }).then((gs) => {
             //           this.set('model', gs);
             //       });
             //   }
             //   if (this.get('role') == 'agency') {
             //           var grants = this.store.query('grants', {
             //               department: this.get('dept'),
             //               page: this.get('currentPage'),
             //           }).then((gs) => {
             //               this.set('model', gs);
             //           });
             //   }
            //} catch(err) {
                
            //}

        }, 

        createGrant(department_id, grant_number, pi_name) {
            var dep = this.get('store').peekRecord('department', department_id);
            var grant = this.get('store').createRecord('grant');
            grant.set('number', grant_number);
            grant.set('department', dep);
            grant.set('pi', pi_name);
            grant.set('questions', dep.toJSON().settings);
            grant.set('institution', true);
            this.store.findRecord('document', 125).then((r) => {
                grant.set('document', r);
                grant.save();
                //this.set('active_grant', grant)
                var grants = this.get('grants');
                grants.push(grant);
                this.set('grants', grants.slice());
            });
        }
    }
});
