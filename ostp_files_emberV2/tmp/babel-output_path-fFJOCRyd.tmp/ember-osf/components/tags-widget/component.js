define('ember-osf/components/tags-widget/component', ['exports', 'ember', 'ember-osf/components/tags-widget/template'], function (exports, _ember, _emberOsfComponentsTagsWidgetTemplate) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsTagsWidgetTemplate['default'],
        newTag: null,
        tags: [],
        actions: {
            addATag: function addATag(tag) {
                var _this = this;

                var res = this.attrs.addATag(tag);
                res.then(function () {
                    return _this.set('newTag', '');
                });
            },
            removeATag: function removeATag(tag) {
                this.sendAction('removeATag', tag);
            }
        }
    });
});