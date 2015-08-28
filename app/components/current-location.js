import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat  = position.coords.latitude;
          var lng = position.coords.longitude;
          this.sendAction('foundLocation', lat, lng);
        });

        this.sendAction('loading');
      } else {
        alert('Your Browser Does Not Support Geolocation');
      }
    }
  }
});
