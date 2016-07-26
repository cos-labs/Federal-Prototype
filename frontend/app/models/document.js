import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  datesubmitted: attr('string'),
  title: attr('string', { defaultValue: 'Untitled'} ),
  filelink: attr('string'),
  grants: hasMany('grant'),
});
