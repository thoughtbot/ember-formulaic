import Ember from 'ember';
import startApp from '../helpers/start-app';
import { module, test } from 'qunit';

module('Acceptance: User fills form', {
  setup: function() {
    this.application = startApp();
  },
  teardown: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('text', assert => {
  visit('/');

  fillForm({
    'form.text': 'text',
    'nested.text': 'text',
  });

  andThen(function() {
    assert.equal(findWithAssert('#text').val(), 'text');
    assert.equal(findWithAssert('#nested-text').val(), 'text');
  });

  fillForm('form', {
    text: 'namespaced text',
  });

  andThen(function() {
    assert.equal(
      findWithAssert('#text').val(),
      'namespaced text',
      'accepts namespace'
    );
  });
});

test('textarea', assert => {
  visit('/');

  fillForm({
    'form.textarea': 'textarea',
    'nested.textarea': 'textarea',
  });

  andThen(function() {
    assert.equal(findWithAssert('#textarea').val(), 'textarea');
    assert.equal(findWithAssert('#nested-textarea').val(), 'textarea');
  });
});

test('select', assert => {
  visit('/');

  fillForm({
    'form.select': '#2',
    'nested.select': '#2',
  });

  andThen(function() {
    assert.equal(findWithAssert('#select').val(), '#2');
    assert.equal(findWithAssert('#nested-select').val(), '#2');
  });
});

test('multiple select', assert => {
  visit('/');

  fillForm({
    'form.multi-select': ['#3', '#4'],
    'nested.multi-select': ['#3', '#4'],
  });

  andThen(function() {
    assert.equal(findWithAssert('#multi-select').val(), '#3,#4');
    assert.equal(findWithAssert('#nested-multi-select').val(), '#3,#4');
  });
});

test('radio', assert => {
  visit('/');

  fillForm({
    'form.radio.yes': true,
    'nested.radio.yes': true,
  });

  andThen(function() {
    assert.ok(findWithAssert('#yes').prop('checked'), 'checks yes');
    assert.ok(findWithAssert('#nested-yes').prop('checked'), 'checks nested yes');
  });

  fillForm({
    'form.radio.no': true,
    'nested.radio.no': true,
  });

  andThen(function() {
    assert.ok(findWithAssert('#no').prop('checked'), 'checks no');
    assert.ok(findWithAssert('#nested-no').prop('checked'), 'checks nested no');
  });
});

test('checkbox', assert => {
  visit('/');

  fillForm({
    'form.checkbox': true,
    'nested.checkbox': true,
  });

  andThen(function() {
    assert.ok(findWithAssert('#checkbox').prop('checked'), 'checks checkbox');
    assert.ok(findWithAssert('#nested-checkbox').prop('checked'), 'checks checkbox');
  });

  fillForm({
    'form.checkbox': false,
    'nested.checkbox': false,
  });

  andThen(function() {
    assert.ok(!findWithAssert('#checkbox').prop('checked'), 'unchecks checkbox');
    assert.ok(!findWithAssert('#nested-checkbox').prop('checked'), 'unchecks checkbox');
  });
});

test('without I18n key', assert => {
  visit('/');

  fillForm({
    'For ID Text': 'text',
  });

  andThen(function() {
    assert.equal(
      findWithAssert('#text').val(),
      'text',
      'falls back to key as label'
    );
  });
});

test('with interpolation', assert => {
  visit('/');

  clickOn(t('form.interpolated', { name: 'form' }));
  clickOn(t('nested.interpolated', { name: 'nested' }));

  andThen(function() {
    assert.ok(
      findWithAssert('#interpolated').prop('checked'),
      'handles interpolated keys'
    );
    assert.ok(
      findWithAssert('#nested-interpolated').prop('checked'),
      'handles nested interpolated keys'
    );
  });
});
