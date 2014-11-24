import Ember from "ember";

export default {
  fill: function(label, value) {
    var selector = "label:contains('" + label + "')";

    if (typeof value === "boolean") {
      var checkboxSelector = selector + " + input";

      click(checkboxSelector);
    } else {
      var textSelector = selector + " + input";
      var textareaSelector = selector + " + textarea";
      var selectSelector = selector + " + select";

      fillIn(textSelector, value)
        .then(function() {}, function() {
          fillIn(textareaSelector, value);
        })
        .then(function() {}, function() {
          fillIn(selectSelector, value);
        });
    }
  },

  fillForm: function(attributes) {
    var labels = Ember.keys(attributes);
    var formulaic = this;

    labels.forEach(function(label) {
      var value = attributes[label];

      formulaic.fill(label, value);
    });
  }
};
