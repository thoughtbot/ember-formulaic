import Ember from 'ember';

Ember.Test.registerAsyncHelper('clickOn', function(app, i18n) {
  const {
    click,
    t
  } = app.testHelpers;

  const text = t(i18n);
  const selector = [
    `label:contains("${text}")`,
    `button:contains("${text}")`,
    `input[type="submit"][value="${text}"]`,
  ].join(',');

  return click(selector);
});
