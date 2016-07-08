QUnit.module('JSHint | models/grant.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/grant.js should pass jshint.\nmodels/grant.js: line 3, col 10, \'belongsTo\' is defined but never used.\nmodels/grant.js: line 3, col 21, \'hasMany\' is defined but never used.\n\n2 errors');
});
