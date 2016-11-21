import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
    agency:  belongsTo('agency'),
    agencystatus: attr('string', {defaultValue: 'New'}),
    document: belongsTo('document'),
    institution: attr('boolean', {defaultValue: false}),
    institutionstatus: attr('string', {defaultValue: 'New'}),
    metadata: attr('json-transform', {defaultValue: '{}'}),
    metadatarequested: attr('boolean', {defaultValue: false}),
    number: attr('string'),
    open: attr('boolean', {defaultValue: true}),
    pi: attr('string', {defaultValue: 'anonymous'}),
    pistatus: attr('string', {defaultValue: 'New'}),
    schema: attr('string'),
    status: attr('string', {defaultValue: 'New'}),
    uploadrequested: attr('boolean', {defaultValue: false})
});
