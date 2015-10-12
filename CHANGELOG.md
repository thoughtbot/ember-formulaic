master
------

0.0.5
-----

* Add `clickOn` support for `<a>` tags and `<input type="radio">`

0.0.4
-----

* Trigger change event when filling `{input,textarea,select}`.

0.0.3
-----

* Restructure files to enable `import './ember-formulaic/test-helpers';`
* Change behvaior of `fillForm` to only work on
  `<label for="text">Text</label><input id="text">`, in addition to
  `<label>Text <input></label>`

0.0.2
-----

* Add `fillForm` and `clickOn` asynchronous test helpers
* Automatically inject `JSHint` predefinitions into `tests/.jshintrc`
