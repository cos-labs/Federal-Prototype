import Ember from 'ember';
import layout from './template';

/* use:
 * {{file-browser rootNode=node selectedFile=file
 *   onClickFile=(action) onClickNode=(action)}}
 */
export default Ember.Component.extend({
    layout: layout,
    classNames: ['file-browser'],

    selectedPath: Ember.computed('selectedFile', function () {
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
        return Ember.A(pathArray);
    })
});