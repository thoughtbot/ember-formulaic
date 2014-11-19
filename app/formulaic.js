import Ember from 'ember';

export default {
  fillForm: function(attributes) {
    var labels = Ember.keys(attributes);

    labels.forEach(function(label) {
      var value = attributes[label];
      var selector = ":contains('" + label + "')";

      if (typeof value === "boolean") {
        var checkboxSelector = selector + " + input";

        click(checkboxSelector);
      } else {
        var textSelector = selector + " + input";
        var textareaSelector = selector + " + textarea";

        fillIn(textSelector, value).catch(function() {
          fillIn(textareaSelector, value);
        });
      }
    });
  }
};
