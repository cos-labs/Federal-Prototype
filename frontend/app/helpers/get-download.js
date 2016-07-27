import Ember from 'ember';

export function getDownload(params/*, hash*/) {
    var path = params[0];
    var download = 'https://staging-files.osf.io/v1/resources/zr5mn/providers/osfstorage';
    var link = download + path;
    return link;
}

export default Ember.Helper.helper(getDownload);
