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

  formulaic.fill("Text", "text value");

  andThen(function() {
    equal(find("#text").val(), "text value");
  });
});

test("textarea", function() {
  visit("/");

  formulaic.fill("Textarea", "textarea value");

  andThen(function() {
    equal(find("#textarea").val(), "textarea value");
  });
});

test("checkbox", function() {
  visit("/");

  formulaic.fill("Checked Checkbox", true);

  andThen(function() {
    ok(find("#checked-checkbox").is(":checked"));
  });
});
