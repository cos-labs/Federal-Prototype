import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
//: Ember.DefaultResolver.extend({
    //resolveTemplate: function(parsedName) {
      //var resolvedTemplate = this._super(parsedName);
      //if (resolvedTemplate) { return resolvedTemplate; }
      //return Ember.TEMPLATES['not_found'];
    //}
//  })
});




loadInitializers(App, config.modulePrefix);

export default App;
