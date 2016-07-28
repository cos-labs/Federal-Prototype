import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  number: attr('string'),
  status: attr('string', { defaultValue: 'unread'}),
  department:  belongsTo('department'),
  document: belongsTo('document'),
  questions: attr('string'),
  answers: attr('string'),
});
