import Ember from 'ember';

export default Ember.Route.extend({
 didRender() {
  this._super(...arguments);
  console.log("hry");

}
});
