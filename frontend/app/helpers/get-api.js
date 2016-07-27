import Ember from 'ember';

// Take in file path as params[0]
export function getApi(params/*, hash*/) {
    var link = 'https://staging-api.osf.io/v2/files';
    return link + params[0];
}

export default Ember.Helper.helper(getApi);
