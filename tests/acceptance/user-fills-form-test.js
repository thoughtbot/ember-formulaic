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

test("with fillForm", function() {
  visit("/");

  formulaic.fillForm({
    "Text": "text value",
    "Textarea": "textarea value",
    "Checked Checkbox": true
  });

  andThen(function() {
    equal(find("#text").val(), "text value");
    equal(find("#textarea").val(), "textarea value");
    ok(find("#checked-checkbox").is(":checked"));
  });
});

test("with fill", function() {
  visit("/");

  formulaic.fill("Text", "text value");
  formulaic.fill( "Textarea", "textarea value");
  formulaic.fill("Checked Checkbox", true);

  andThen(function() {
    equal(find("#text").val(), "text value");
    equal(find("#textarea").val(), "textarea value");
    ok(find("#checked-checkbox").is(":checked"));
  });
});
