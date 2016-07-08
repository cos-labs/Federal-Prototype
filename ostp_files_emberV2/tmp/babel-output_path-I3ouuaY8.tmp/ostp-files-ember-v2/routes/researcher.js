define('ostp-files-ember-v2/routes/researcher', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.peekAll('grant');
    }
  });
});