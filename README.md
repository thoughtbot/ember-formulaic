# Ember-Formulaic

## Usage

With the following form:

```handlebars
<form {{action "login" on="submit"}}>
  <div class="input">
    <label for="email">Email or Username</label>
    <input id="email" type="text" value=email>
  </div>

  <div class="input">
    <label for="password">Password</label>
    <input id="password" type="password" value=password>
  </div>

  <div class="input">
    <label for="remember-me">Remember Me</label>
    <input id="remember-me" type="checkbox" value=remember>
  </div>

  <button class="submit">Login</button>
</form>
```

In your acceptance test, import `formulaic` and use the `fillForm` method.

```javascript
// test/acceptance/fill-in-form.js
import formulaic from "../../formulaic";

// ...

test("fill in form", function() {

  visit("/login")

  formulaic.fillForm({
    "Email or Username": "ralph@thoughtbot.com",
    "Password": "secret",
    "Remember me": true
  });
  click("button.submit");

  andThen(function() {
    equal(currentPath(), "loggedInPath");
  });
});
```

If you'd like, you can use `formulaic.fill`:

```javascript
// test/acceptance/fill-in-form.js
import formulaic from "../../formulaic";

// ...

test("fill in form", function() {

  visit("/login")

  formulaic.fill("Email or Username", "ralph@thoughtbot.com");
  formulaic.fill("Password", "secret");
  formulaic.fill("Remember me", true);
  click("button.submit");

  andThen(function() {
    equal(currentPath(), "loggedInPath");
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
