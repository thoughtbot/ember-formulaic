import Ember from 'ember';
import translate from './utils/translate';

Ember.Test.registerAsyncHelper('clickOn', function(app, i18n) {
  const {
    click,
    t
  } = app.testHelpers;

  const text = translate(t, i18n);
  const selector = [
    `a:contains("${text}")`,
    `label:contains("${text}")`,
    `button:contains("${text}")`,
    `input[type="submit"][value="${text}"]`,
  ].join(',');

  return click(selector);
});
