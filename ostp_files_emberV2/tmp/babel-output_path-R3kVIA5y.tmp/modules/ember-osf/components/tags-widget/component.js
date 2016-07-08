import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout: layout,
    newTag: null,
    tags: [],
    actions: {
        addATag: function addATag(tag) {
            var _this = this;

            var res = this.attrs.addATag(tag);
            res.then(function () {
                return _this.set('newTag', '');
            });
        },
        removeATag: function removeATag(tag) {
            this.sendAction('removeATag', tag);
        }
    }
});