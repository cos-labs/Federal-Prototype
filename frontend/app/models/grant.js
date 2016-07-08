import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  number: attr('string'),
  department:  attr('string'),
  document: attr('string')
});
