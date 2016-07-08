define('ember-osf/adapters/contributor', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
    'use strict';

    exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend({
        generateIdForRecord: function generateIdForRecord(_, __, inputProperties) {
            return inputProperties.nodeId + '-' + inputProperties.userId;
        }
    });
});