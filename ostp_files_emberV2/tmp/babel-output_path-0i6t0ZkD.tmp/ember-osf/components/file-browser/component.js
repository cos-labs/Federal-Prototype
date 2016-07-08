define('ember-osf/components/file-browser/component', ['exports', 'ember', 'ember-osf/components/file-browser/template'], function (exports, _ember, _emberOsfComponentsFileBrowserTemplate) {
    'use strict';

    /* use:
     * {{file-browser rootNode=node selectedFile=file
     *   onClickFile=(action) onClickNode=(action)}}
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileBrowserTemplate['default'],
        classNames: ['file-browser'],

        selectedPath: _ember['default'].computed('selectedFile', function () {
            var file = this.get('selectedFile');
            if (!file) {
                return null;
            }
            var pathArray = this.get('selectedFile.materializedPath').split('/');
            pathArray = pathArray.filter(function (name) {
                return name !== '';
            });
            pathArray.unshift(file.get('provider'));
            pathArray.unshift(this.get('rootNode.title'));
            return _ember['default'].A(pathArray);
        })
    });
});