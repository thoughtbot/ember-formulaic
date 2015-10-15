import Ember from 'ember';
import translationOrNull from './utils/translation-or-null';

Ember.Test.registerAsyncHelper('clickOn', function(app, i18n) {
  const {
    click,
    t
  } = app.testHelpers;

  const text = translationOrNull(t(i18n)) || i18n;
  const selector = [
    `a:contains("${text}")`,
    `label:contains("${text}")`,
    `button:contains("${text}")`,
    `input[type="submit"][value="${text}"]`,
  ].join(',');

  return click(selector);
});
