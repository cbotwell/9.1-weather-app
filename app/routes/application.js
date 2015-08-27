import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectWeather: function(lat, lng) {
      this.transitionTo('weather', lat, lng);
    },
  },
});
