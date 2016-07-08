import OsfAdapter from './osf-adapter';

export default OsfAdapter.extend({
    generateIdForRecord: function generateIdForRecord(_, __, inputProperties) {
        return inputProperties.nodeId + '-' + inputProperties.userId;
    }
});