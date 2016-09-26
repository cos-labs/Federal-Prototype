import Ember from 'ember';

// Take in doc id as params[0]
export function getApi(params/*, hash*/) {
    var link = 'localhost:8001/documents/';
    return link + params[0];
}

export default Ember.Helper.helper(getApi);
