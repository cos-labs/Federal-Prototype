import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout: layout,
    session: Ember.inject.service(),
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
        drop.options = Ember.merge(drop.options, dropzoneOptions);
        if (listeners && typeof listeners === 'object') {
            Object.keys(listeners).map(function (each) {
                return drop.on(each, listeners[each]);
            });
        }
    }
});