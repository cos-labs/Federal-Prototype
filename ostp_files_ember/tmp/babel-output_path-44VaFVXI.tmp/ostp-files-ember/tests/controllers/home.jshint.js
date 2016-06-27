define('ostp-files-ember/tests/controllers/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass jshint.\ncontrollers/home.js: line 12, col 16, Expected \'===\' and instead saw \'==\'.\ncontrollers/home.js: line 14, col 22, Expected \'===\' and instead saw \'==\'.\ncontrollers/home.js: line 16, col 22, Expected \'===\' and instead saw \'==\'.\ncontrollers/home.js: line 18, col 22, Expected \'===\' and instead saw \'==\'.\ncontrollers/home.js: line 20, col 22, Expected \'===\' and instead saw \'==\'.\ncontrollers/home.js: line 22, col 22, Expected \'===\' and instead saw \'==\'.\n\n6 errors');
  });
});