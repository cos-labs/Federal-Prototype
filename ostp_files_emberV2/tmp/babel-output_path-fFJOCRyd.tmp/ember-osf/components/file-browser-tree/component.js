define('ember-osf/components/file-browser-tree/component', ['exports', 'ember', 'ember-osf/components/file-browser-tree/template'], function (exports, _ember, _emberOsfComponentsFileBrowserTreeTemplate) {
    'use strict';

    /**
     * A row could represent a node, file-provider, or file, each of which has a
     * different interface. RowProxy provides a consistent interface for everything
     * the file browser needs to know.
     *
     * Important: Use `row.content` when passing a row model outside file-browser
     */
    var RowProxy = _ember['default'].ObjectProxy.extend({
        selected: false,
        expanded: false,
        isLoading: false,
        name: _ember['default'].computed.or('content.name', 'content.title'),
        isExpandable: _ember['default'].computed.or('isFolder', 'isNode'),
        isNode: _ember['default'].computed.equal('content.constructor.modelName', 'node'),
        isLinkable: _ember['default'].computed.or('isNode', 'isFile'),

        childTrees: null,

        /**
         * Load all this row's children. Concatenates `content.files` (if it exists)
         * with `content.children` (if it exists) and puts the result in
         * `childTrees`.
         *
         * Has about the same result as:
         * `childTrees: Ember.computed.union('content.files', 'content.children')`
         * but it sets `isLoading` to `true` when it starts and to `false` when it's
         * done. Computed properties don't expose the underlying promises, and a
         * loading indicator seems important.
         *
         * TODO: But this counters ember's binding magic... If the file/node models
         * change, the tree won't automatically update. Could add another observer
         * on `files` and `children`, but it would be nice to find another way to
         * update `isLoading` and get rid of this method entirely
         */
        loadChildTrees: function loadChildTrees() {
            var _this = this;

            this.set('isLoading', true);
            var promises = [this.get('content.files'), this.get('content.children')];
            _ember['default'].RSVP.allSettled(promises).then(function (results) {
                var childTrees = _ember['default'].A();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var r = _step.value;

                        var array = r.value;
                        if (array && array.length) {
                            for (var i = 0; i < array.length; i++) {
                                var child = array.objectAt(i);
                                childTrees.pushObject(child);
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                _this.set('childTrees', childTrees);
                _this.set('isLoading', false);
            });
        }
    });

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileBrowserTreeTemplate['default'],
        tagName: 'tbody',
        expanded: _ember['default'].computed.alias('row.expanded'),

        nextSelectedPath: _ember['default'].computed('selectedPath', function () {
            var selectedPath = this.get('selectedPath');
            return selectedPath ? selectedPath.slice(1) : null;
        }),

        row: _ember['default'].computed('root', 'selectedPath', function () {
            var row = RowProxy.create({ content: this.get('root') });
            var selectedPath = this.get('selectedPath');
            if (selectedPath && selectedPath.length) {
                if (row.get('name') === selectedPath[0]) {
                    row.set('expanded', true);
                    if (selectedPath.length === 1) {
                        row.set('selected', true);
                    }
                }
            }
            return row;
        }),

        // This observer is part of the loadChildTrees hack in RowProxy
        expandedChanged: _ember['default'].on('init', _ember['default'].observer('expanded', function () {
            if (this.get('expanded')) {
                this.get('row').loadChildTrees();
            }
        })),

        actions: {
            clickRow: function clickRow(row) {
                var action = null;
                if (row.get('isFile') || row.get('isFolder')) {
                    action = this.get('onClickFile');
                } else if (row.get('isNode')) {
                    action = this.get('onClickNode');
                }
                if (action) {
                    action(row.content);
                }
            }
        }
    });
});