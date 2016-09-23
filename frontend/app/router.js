import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('researcher', function() {
        this.route('metadata');
        this.route('upload');
        this.route('grant');
        this.route('success');
    });
    this.route('grants', function() {
        this.route('create');
    });
    this.route('documents', function() {
        this.route('create');
    })
    this.route('moderator');
    this.route('institution');
    this.route('settings', function() {
        this.route('metadata');
        this.route('api');
    });
});

export default Router;

