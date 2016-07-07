import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('researcher');
  this.route('admin');
  this.route('login');
  this.route('settings');
});

export default Router;
