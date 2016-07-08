define('ember-osf/components/file-renderer/component', ['exports', 'ember', 'ember-osf/components/file-renderer/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsFileRendererTemplate, _emberGetConfig) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileRendererTemplate['default'],
        download: null,
        width: '100%',
        height: '100%',
        mfrUrl: _ember['default'].computed('download', function () {
            var base = _emberGetConfig['default'].OSF.renderUrl;
            var download = this.get('download');
            var renderUrl = base + '?url=' + encodeURIComponent(download + '?direct&mode=render&initialWidth=766');
            return renderUrl;
        })
    });
});