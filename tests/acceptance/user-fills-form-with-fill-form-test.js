import Ember from "ember";
import startApp from "../helpers/start-app";
import formulaic from "../../formulaic";

var App;

module("Acceptance: User fills form", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, "destroy");
  }
});

test("text", function() {
  visit("/");

  formulaic.fillForm({
    "Text": "text value",
    "Textarea": "textarea value"
  });

  andThen(function() {
    equal(find("#text").val(), "text value");
  });
});

test("textarea", function() {
  visit("/");

  formulaic.fillForm({ "Textarea": "textarea value" });

  andThen(function() {
    equal(find("#textarea").val(), "textarea value");
  });
});

test("checkbox", function() {
  visit("/");

  formulaic.fillForm({ "Checked Checkbox": true });

  andThen(function() {
    ok(find("#checked-checkbox").is(":checked"));
  });
});
