define('ember-osf/components/search-dropdown/component', ['exports', 'ember', 'ember-osf/components/search-dropdown/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsSearchDropdownTemplate, _emberGetConfig) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsSearchDropdownTemplate['default'],
        host: _emberGetConfig['default'].OSF.url,
        query: null,
        actions: {
            // Runs toggleSearch in parent component, osf-navbar
            toggleSearch: function toggleSearch() {
                this.sendAction('action');
            },
            updateQuery: function updateQuery(value) {
                this.set('query', value);
            },
            search: function search() {
                var query = this.get('query');
                if (query) {
                    window.location.href = this.host + 'search/?q=' + query;
                }
            }
        }
    });
});