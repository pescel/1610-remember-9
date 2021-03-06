import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reminders', function() {
    this.route('reminder', {path: '/:reminder_id'});
    this.route('new');
  });
});

export default Router;
