define('ember-osf/utils/load-relationship', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = loadAll;

    function loadAll(model, relationship, dest) {
        var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        var page = options.page || 1;
        var query = {
            'page[size]': 10,
            page: page
        };
        query = _ember['default'].merge(query, options || {});

        model.query(relationship, query).then(function (results) {
            dest.pushObjects(results.toArray());

            var total = results.meta.pagination.total;
            var pageSize = results.meta.pagination.per_page;
            var remaining = total - page * pageSize;
            if (remaining > 0) {
                loadAll(model, relationship, dest, {
                    'page[size]': pageSize,
                    page: page + 1
                });
            }
        });
    }
});