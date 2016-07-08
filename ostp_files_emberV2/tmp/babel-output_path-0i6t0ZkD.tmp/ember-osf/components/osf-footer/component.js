define('ember-osf/components/osf-footer/component', ['exports', 'ember', 'ember-osf/components/osf-footer/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsOsfFooterTemplate, _emberGetConfig) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOsfFooterTemplate['default'],
        helpUrl: _emberGetConfig['default'].OSF.helpUrl,
        supportEmail: _ember['default'].computed(function () {
            return '<n uers=\"znvygb:pbagnpg@bfs.vb\" ery=\"absbyybj\">Pbagnpg</n>'.replace(/[a-zA-Z]/g, function (e) {
                return String.fromCharCode((e <= 'Z' ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26);
            });
        })
    });
});