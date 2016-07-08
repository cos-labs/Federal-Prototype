define('ember-osf/models/osf-model', ['exports', 'ember', 'ember-data', 'ember-data-has-many-query', 'ember-osf/utils/array-items-are-equal'], function (exports, _ember, _emberData, _emberDataHasManyQuery, _emberOsfUtilsArrayItemsAreEqual) {
    /*
      Common properties and behaviors shared by all OSF APIv2 models
     */

    'use strict';

    exports['default'] = _emberData['default'].Model.extend(_emberDataHasManyQuery['default'].ModelMixin, {
        links: _emberData['default'].attr('links'),
        embeds: _emberData['default'].attr('embed'),

        relationshipLinks: _ember['default'].computed.alias('links.relationships'),
        _dirtyRelationships: {},
        dirtyRelationships: _ember['default'].computed('_dirtyRelationships', function () {
            var dirtyRelationships = this.get('_dirtyRelationships');
            return Object.keys(dirtyRelationships).filter(function (k) {
                return dirtyRelationships[k];
            });
        }).volatile(),
        _peekRelationship: function _peekRelationship(relationship) {
            var meta = this[relationship].meta();
            var relation;
            if (meta.kind === 'hasMany') {
                relation = this.hasMany(relationship).hasManyRelationship;
            } else if (meta.kind === 'belongsTo') {
                relation = this.belongsTo(relationship).belongsToRelationship;
            }
            return relation.members.list;
        },
        clearDirtyRelationship: function clearDirtyRelationship(relationship) {
            this.set('_dirtyRelationships.' + relationship, false);
            // Also clean the inverse relationship
            var relatedMeta = this[relationship].meta();
            this._peekRelationship(relationship).forEach(function (internalModel) {
                internalModel.record.set('_dirtyRelationships.' + relatedMeta.options.inverse, false);
            });
        },
        isNewOrDirty: function isNewOrDirty() {
            return this.get('isNew') || Object.keys(this.changedAttributes()).length;
        },
        save: function save() {
            var _this = this;

            this.eachRelationship(function (rel, meta) {
                var relation;
                if (meta.kind === 'hasMany') {
                    relation = _this.hasMany(rel).hasManyRelationship;
                } else if (meta.kind === 'belongsTo') {
                    relation = _this.belongsTo(rel).belongsToRelationship;
                }
                // TODO(samchrisinger): not sure if hasLoaded is a subset if the hasData state
                if (relation.hasData || relation.hasLoaded) {
                    var canonicalIds = relation.canonicalMembers.list.map(function (member) {
                        return member.record.get('id');
                    });
                    var currentIds = relation.members.list.map(function (member) {
                        return member.record.get('id');
                    });
                    if (!(0, _emberOsfUtilsArrayItemsAreEqual['default'])(canonicalIds, currentIds)) {
                        _this.set('_dirtyRelationships.' + rel, true);
                    } else {
                        for (var i = 0; i < relation.members.size; i++) {
                            var record = relation.members.list[i].record;
                            if (record && record.isNewOrDirty()) {
                                _this.set('_dirtyRelationships.' + rel, true);
                                break;
                            }
                        }
                    }
                }
            });
            return this._super.apply(this, arguments);
        }
    });
});