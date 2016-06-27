define('ostp-files-ember/tests/test-helper', ['exports', 'ostp-files-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _ostpFilesEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_ostpFilesEmberTestsHelpersResolver['default']);
});