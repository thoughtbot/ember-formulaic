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

  formulaic.fillForm({ "Text": "text" });

  andThen(function() {
    equal(find("#text").val(), "text");
  });
});

test("textarea", function() {
  visit("/");

  formulaic.fillForm({ "Textarea": "textarea" });

  andThen(function() {
    equal(find("#textarea").val(), "textarea");
  });
});

test("select", function() {
  visit("/");

  formulaic.fillForm({ "Select": "#2" });

  andThen(function() {
    equal(find("#select").val(), "#2");
  });
});

test("multiple select", function() {
  visit("/");

  formulaic.fillForm({ "Multi-Select": ["#3", "#4"] });

  andThen(function() {
    equal(find("#multi-select").val(), "#3,#4");
  });
});

test("checkbox", function() {
  visit("/");

  formulaic.fillForm({ "Checked Checkbox": true });

  andThen(function() {
    ok(find("#checked-checkbox").is(":checked"));
  });
});
