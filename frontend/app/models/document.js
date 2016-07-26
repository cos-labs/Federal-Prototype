import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  datesubmitted: attr('string'),
  name: attr('string', { defaultValue: 'Untitled'} ),
  path: attr('string'),
  grants: hasMany('grant'),
});
