import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    var lat = 34.734607;
    var lng = -92.272754;
    return Ember.$.ajax('https://safe-river-8896.herokuapp.com/' + lat + ',' + lng);
  }
});
