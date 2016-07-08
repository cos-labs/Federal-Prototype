define('ember-osf/mixins/taggable-mixin', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Mixin.create({
        actions: {
            addATag: function addATag(tag) {
                var resource = this.get('model');
                var currentTags = resource.get('tags').slice(0);
                _ember['default'].A(currentTags);
                currentTags.pushObject(tag);
                resource.set('tags', currentTags);
                return resource.save();
            },
            removeATag: function removeATag(tag) {
                var resource = this.get('model');
                var currentTags = resource.get('tags').slice(0);
                currentTags.splice(currentTags.indexOf(tag), 1);
                resource.set('tags', currentTags);
                resource.save();
            }
        }
    });
});