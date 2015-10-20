# Ember-Formulaic

Simplify form filling with i18n translations.

Remove the tedium of formulaic form filling with Ember Test Helpers

Formulaic allows you to specify a hash of attributes to be input rather than
procedurally calling Ember’s DSL methods.

## Usage

First, import the test helpers:

```js
// tests/start-app.js
import './ember-formulaic/test-helpers';
```

Assume the page has the following template:

```hbs
{{! app/templates/login.hbs }}

<form {{action "login" on="submit"}}>
  <div class="input">
    <label for="email">{{t "login.email"}}</label>
    {{input id="email" type="text" value=email}}
  </div>

  <div class="input">
    <label for="password">{{t "login.password"}}</label>
    {{input id="password" type="password" value=password}}
  </div>

  <div class="input">
    <label for="remember-me">{{t "login.remember-me"}}</label>
    {{input id="remember-me" type="checkbox" value=remember}}
  </div>

  <div class="input">
    <label for="role">{{t "login.role"}}</label>
    <select id="role">
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  </div>

  <button class="submit">{{t "login.submit"}}</button>
</form>
```

and the following translations:

```js
// app/locales/en/translations.js

export default {
  'login': {
    'email': 'Email or Username',
    'password': 'Password',
    'remember-me': 'Remember Me',
    'role': 'Role',
    'submit': 'Login',
  }
};
```

In your acceptance test, use the `fillForm` method:

```js
// test/acceptance/fill-in-form-test.js

test('fill in form', function() {
  visit('/login')

  // with the 'login' namespace
  fillForm('login', {
    email: 'ralph@thoughtbot.com',
    password: 'secret',
    remember-me: true,
    role: 'user',
  });

  // without a namespace
  fillForm({
    'login.email': 'ralph@thoughtbot.com',
    'login.password': 'secret',
    'login.remember-me': true,
    'login.role': 'user',
  });
  clickOn('form.submit');

  andThen(function() {
    equal(currentPath(), 'loggedInPath');
  });
});
```

### Translations with embedded HTML

When translating a label with HTML:

```hbs
<label for="send-emails>{{t "send-emails" email="me@example.com"}}</label>
<input id="send-emails" type="checkbox">
```

with the following translation file:

```js
export default {
  'send-emails': 'Send me (<strong>{{email}}</strong>) emails',
};
```

`fillForm` and `clickOn` will strip out the `<strong>` tags when looking for
`label:contains("Send me (me@example.com) emails")`.

### Missing Translations

In the case of missing translations, `fillForm` and `clickOn` will fallback to
looking up `label` tags containing the value of the translation key.

For instance:

```js
clickOn('A label without a translation');
```

will look for first look for a translation keyed by `"A label without a
translation"`, fail, then fallback to looking for
`label:contains("A label without a translation")`.

**NOTE:**

If you've overridden [app/utils/i18n/missing-message.js][override] to return a
non-`null` value that doesn't begin with `Missing translation`, this behavior
won't work.

[override]: https://github.com/jamesarosen/ember-i18n/wiki/Doc:-Missing-Translations#missing-translations

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

  [CONTRIBUTING]: CONTRIBUTING.md
  [contributors]: https://github.com/thoughtbot/ember-formulaic/graphs/contributors

## License

ember-formulaic is Copyright (c) 2015 thoughtbot, inc.
It is free software, and may be redistributed
under the terms specified in the [LICENSE] file.

  [LICENSE]: /LICENSE.md

## About

ember-formulaic is maintained by [Sean Doyle][seanpdoyle].

![thoughtbot](https://thoughtbot.com/logo.png)

  [seanpdoyle]: https://github.com/seanpdoyle

ember-formulaic is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

  [community]: https://thoughtbot.com/community?utm_source=github
  [hire]: https://thoughtbot.com/hire-us?utm_source=github
