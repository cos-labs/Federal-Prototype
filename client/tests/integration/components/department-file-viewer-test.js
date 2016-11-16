import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('department-file-viewer', 'Integration | Component | department file viewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{department-file-viewer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#department-file-viewer}}
      template block text
    {{/department-file-viewer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
