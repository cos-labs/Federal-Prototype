define('ember-osf/components/osf-mode-footer/component', ['exports', 'ember', 'ember-osf/components/osf-mode-footer/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsOsfModeFooterTemplate, _emberGetConfig) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOsfModeFooterTemplate['default'],
        isDevMode: _emberGetConfig['default'].OSF.backend !== 'prod'
    });
});