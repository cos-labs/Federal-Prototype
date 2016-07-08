define('ostp-files-ember-v2/components/dropzone-widget', ['exports', 'ember', 'ostp-files-ember-v2/components/template'], function (exports, _ember, _ostpFilesEmberV2ComponentsTemplate) {
    exports['default'] = _ember['default'].Component.extend({
        layout: _ostpFilesEmberV2ComponentsTemplate['default'],
        session: _ember['default'].inject.service(),
        classNames: ['dropzone'],
        didRender: function didRender() {
            var _this = this;

            var preUpload = this.get('preUpload');
            var dropzoneOptions = this.get('options');
            var listeners = this.get('listeners');
            if (!this.get('buildUrl') && !preUpload && (!dropzoneOptions || !dropzoneOptions.url)) {
                console.error('Need to define url somewhere');
            }
            var drop = new Dropzone('#' + this.elementId, { // jshint ignore:line
                url: function url(file) {
                    return typeof _this.get('buildUrl') === 'function' ? _this.get('buildUrl')(file) : _this.get('buildUrl');
                },
                autoProcessQueue: false
            });

            var headers = {};
            this.get('session').authorize('authorizer:osf-token', function (headerName, content) {
                headers[headerName] = content;
            });

            drop.options.headers = headers;
            drop.on('addedfile', function (file) {
                if (preUpload) {
                    preUpload(_this, drop, file).then(function () {
                        return drop.processFile(file);
                    });
                } else {
                    drop.processFile(file);
                }
            });
            drop.options = _ember['default'].merge(drop.options, dropzoneOptions);
            if (listeners && typeof listeners === 'object') {
                Object.keys(listeners).map(function (each) {
                    return drop.on(each, listeners[each]);
                });
            }
        }
    });
});