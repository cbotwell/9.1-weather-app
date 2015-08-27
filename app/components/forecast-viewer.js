import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showWeek: function() {
      this.$('.week').slideToggle();
    },
    showDay: function() {
      this.$('.day').slideToggle();
    },
  },
});
