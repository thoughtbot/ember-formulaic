# Ember-Formulaic

Simplify form filling with i18n translations.

Remove the tedium of formulaic form filling with Ember Test Helpers

Formulaic allows you to specify a hash of attributes to be input rather than
procedurally calling Ember’s DSL methods.

## Usage

First, import the test helpers:

```js
// tests/test-helper.js
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
