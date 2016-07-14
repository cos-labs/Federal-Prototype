import Ember from 'ember';


export default Ember.Route.extend({
     isApi: false,
 actions: {
      api() {
        this.set("isApi" , true);
       console.log(this.get("isApi"));

      },
      metaData() {
       console.log(this.get("isApi"));
       this.set("isApi" , false);
      }
    }
});
