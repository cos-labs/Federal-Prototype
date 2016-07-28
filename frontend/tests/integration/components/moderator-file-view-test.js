import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('moderator-file-view', 'Integration | Component | moderator file view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{moderator-file-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#moderator-file-view}}
      template block text
    {{/moderator-file-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
