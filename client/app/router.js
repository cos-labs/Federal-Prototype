import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    this.route('grants', function() {
        this.route('create');
    });

    this.route('documents', function() {
        this.route('create');
    });

    this.route('researcher', function() {
      this.route('metadata');
      this.route('upload');
      this.route('attach');
      this.route('grant');
      this.route('success');
      this.route('status');
      this.route('overview');
    });

    this.route('institution', function() {
        this.route('overview', {path: '/:institution/overview'});
        this.route('analytics');
        this.route('addgrant');
        this.route('assign');
    });

    this.route('agency', function() {
        this.route('overview', {path: '/agency/:agency/overview'});
        this.route('analytics');
        this.route('addgrant');
        this.route('settings', function() {
            this.route('metadata');
            this.route('api');
        });
    });

    this.route('preview');
    this.route('signup');
});

export default Router;

