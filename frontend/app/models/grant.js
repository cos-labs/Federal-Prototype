import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  number: attr('string'),
  department:  belongsTo('department'),
  document: belongsTo('document'),
  settings: attr('string'),
});
