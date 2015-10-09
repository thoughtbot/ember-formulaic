import Ember from 'ember';

export default Ember.Controller.extend({
  submitted: false,
  nestedSubmitted: false,

  actions: {
    submit() {
      this.set('submitted', true);
    },
    nestedSubmit() {
      this.set('nestedSubmitted', true);
    }
  }
});
