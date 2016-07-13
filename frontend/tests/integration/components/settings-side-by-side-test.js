import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('settings-side-by-side', 'Integration | Component | settings side by side', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{settings-side-by-side}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#settings-side-by-side}}
      template block text
    {{/settings-side-by-side}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
