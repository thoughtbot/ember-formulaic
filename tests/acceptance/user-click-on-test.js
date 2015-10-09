import Ember from 'ember';
import startApp from '../helpers/start-app';
import { module, test } from 'qunit';

module('Acceptance: User clicks on', {
  setup: function() {
    this.application = startApp();
  },
  teardown: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('button', assert => {
  visit('/');

  andThen(function() {
    assert.equal(find('#submitted').length, 0, 'clicking button submits form');
    assert.equal(find('#nested-submitted').length, 0, 'clicking button submits nested form');
  });

  clickOn('form.button');
  clickOn('nested.button');

  andThen(function() {
    assert.ok(findWithAssert('#submitted'), 'clicking button submits form');
    assert.ok(findWithAssert('#nested-submitted'), 'clicking button submits nested form');
  });
});

test('submit', assert => {
  visit('/');

  andThen(function() {
    assert.equal(find('#submitted').length, 0, 'clicking button submits form');
    assert.equal(find('#nested-submitted').length, 0, 'clicking button submits nested form');
  });

  clickOn('form.submit');
  clickOn('nested.submit');

  andThen(function() {
    assert.ok(findWithAssert('#submitted'), 'clicking button submits form');
    assert.ok(findWithAssert('#nested-submitted'), 'clicking button submits nested form');
  });
});

test('checkbox', assert => {
  visit('/');

  clickOn('form.checkbox');
  clickOn('nested.checkbox');

  andThen(function() {
    assert.ok(
      findWithAssert('#checkbox').prop('checked'),
      'clicking checkbox checks it'
    );
    assert.ok(
      findWithAssert('#nested-checkbox').prop('checked'),
      'clicking nested checkbox checks it'
    );
  });

  clickOn('form.checkbox');
  clickOn('nested.checkbox');

  andThen(function() {
    assert.ok(
      !findWithAssert('#checkbox').prop('checked'),
      'clicking checkbox unchecks it'
    );
    assert.ok(
      !findWithAssert('#nested-checkbox').prop('checked'),
      'clicking nested checkbox unchecks it'
    );
  });
});
