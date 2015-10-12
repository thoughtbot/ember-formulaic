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
  });

  clickOn('form.button');

  andThen(function() {
    assert.ok(findWithAssert('#submitted'), 'clicking button submits form');
  });
});

test('anchor', assert => {
  visit('/');

  andThen(function() {
    assert.equal(find('#submitted').length, 0, 'clicking anchor submits form');
  });

  clickOn('form.anchor');

  andThen(function() {
    assert.ok(findWithAssert('#submitted'), 'clicking anchor submits form');
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

test('radio', assert => {
  visit('/');

  clickOn('form.radio.yes');
  clickOn('nested.radio.yes');

  andThen(function() {
    assert.ok(
      findWithAssert('#yes').prop('checked'),
      'clicking yes checks it'
    );
    assert.ok(
      findWithAssert('#nested-yes').prop('checked'),
      'clicking nested yes checks it'
    );
  });

  clickOn('form.radio.no');
  clickOn('nested.radio.no');

  andThen(function() {
    assert.ok(
      findWithAssert('#no').prop('checked'),
      'clicking no checks it'
    );
    assert.ok(
      findWithAssert('#nested-no').prop('checked'),
      'clicking nested no checks it'
    );
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
