define('ember-osf/utils/serialize-relationship', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports.serializeHasMany = serializeHasMany;
    exports.serializeBelongsTo = serializeBelongsTo;

    var inflector = new _ember['default'].Inflector(_ember['default'].Inflector.defaultRules);

    /**
     * Serialize the hasMany relationship of a record
     *
     * @method serializeHasMany
     * @param {String} relationship Name of the relationship attribute as representd on the model
     * @param {String} type API type of the related resource being serialized
     * @param {DS.Model} record DS.Model instance to pull related data off of
     * @return {Object} Serialized data
     */

    function serializeHasMany(relationship, type, record) {
        return {
            data: record.get(relationship).map(function (record) {
                return {
                    type: inflector.pluralize(type),
                    id: record.id
                };
            })
        };
    }

    function serializeBelongsTo(relationship, type, record) {
        // jshint ignore:line
        // TODO
        return {};
    }
});