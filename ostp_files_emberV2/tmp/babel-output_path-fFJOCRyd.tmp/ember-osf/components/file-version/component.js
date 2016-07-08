define('ember-osf/components/file-version/component', ['exports', 'ember', 'ember-osf/components/file-version/template'], function (exports, _ember, _emberOsfComponentsFileVersionTemplate) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileVersionTemplate['default'],
        classNames: ['file-version'],
        tagName: 'tr',

        actions: {
            downloadVersion: function downloadVersion(version) {
                this.sendAction('download', version);
            }
        }
    });
});