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

      fillIn(textSelector, value)
        .then(function() {}, function() {
          fillIn(textareaSelector, value);
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
