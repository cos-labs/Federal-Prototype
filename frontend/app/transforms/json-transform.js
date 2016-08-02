import DS from 'ember-data';

export default DS.Transform.extend({
  serialize(deserialized) {
  	console.log("serialize" , deserialized);
    return JSON.stringify(deserialized);
  },
   deserialize(serialized) {
  	console.log("deserialize" , serialized);
    return JSON.parse(serialized);
  }

});
