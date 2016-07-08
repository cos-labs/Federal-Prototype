define('ember-osf/components/file-browser-icon/component', ['exports', 'ember', 'ember-osf/components/file-browser-icon/template'], function (exports, _ember, _emberOsfComponentsFileBrowserIconTemplate) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileBrowserIconTemplate['default'],
        tagName: 'span',
        classNames: ['file-browser-icon'],

        click: function click() {
            if (this.get('row.isExpandable')) {
                this.toggleProperty('row.expanded');
            }
        },

        iconName: _ember['default'].computed('row', 'row.expanded', function () {
            // TODO: More icons!
            if (this.get('row.isNode')) {
                // TODO type of node
                return 'cube';
            }
            if (this.get('row.isProvider')) {
                // TODO provider-specific
                return 'hdd-o';
            }
            if (this.get('row.isFolder')) {
                return this.get('row.expanded') ? 'folder-open' : 'folder';
            }
            // TODO file types
            return 'file-o';
        })
    });
});