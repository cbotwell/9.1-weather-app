import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getLocation: function() {
      if ("geolocation" in navigator) {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function success(position) {
          var lat  = position.coords.latitude;
          var lng = position.coords.longitude;
          // _this.transitionToRoute('weather', lat, lng);
          // _this.transitionTo('/' + lat + '/' + lng);
        });
      } else {
        alert('Your Browser Does Not Support Geolocation');
      }
    }
  }
});
