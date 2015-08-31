import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var lat = params.lat;
    var lng = params.lng;
    return Ember.$.ajax('https://safe-river-8896.herokuapp.com/' + lat + ',' + lng);
  }
});
