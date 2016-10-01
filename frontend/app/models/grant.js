import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
    open: attr('boolean', {defaultValue: true}),
    number: attr('string'),
    metadatarequested: attr('boolean', {defaultValue: false}),
    uploadrequested: attr('boolean', {defaultValue: false}),
    pistatus: attr('string', {defaultValue: 'New'}),
    institutionstatus: attr('string', {defaultValue: 'New'}),
    agencystatus: attr('string', {defaultValue: 'New'}),
    status: attr('string', {defaultValue: 'New'}),
    department:  belongsTo('department'),
    document: belongsTo('document'),
    schema: attr('string'),
    metadata: attr('json-transform', {defaultValue: '{}'}),
    institution: attr('boolean', {defaultValue: false}),
    pi: attr('string', {defaultValue: 'anonymous'})
});
