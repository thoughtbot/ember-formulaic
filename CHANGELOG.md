master
------

0.0.6
-----

* When searching for `label` tags containing translations, strip HTML tags
  from search text
* Falls back to checking the label for the value of the translation key
* Accept an I18n namespace to be prepended to `fillForm`'s translation keys

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
