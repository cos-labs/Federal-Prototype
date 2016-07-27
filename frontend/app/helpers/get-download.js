import Ember from 'ember';

// Take in file path as params[0]
export function getDownload(params/*, hash*/) {
    var download = 'https://staging-files.osf.io/v1/resources/zr5mn/providers/osfstorage';
    return download + params[0];
}

export default Ember.Helper.helper(getDownload);
