import Ember from 'ember';

export default function(app, i18n, value) {
  const {
    clickOn,
    fillIn,
    t
  } = app.testHelpers;
  const text = t(i18n);
  const label = `label:contains("${text}")`;
  const selector = [
    `${label} input:not([type="checkbox"])`,
    `${label} + input:not([type="checkbox"])`,
    `${label} textarea`,
    `${label} + textarea`,
    `${label} select`,
    `${label} + select`,
  ].join(',');

  return fillIn(selector, value)
    .then(
      Ember.K,
      () => clickOn(i18n)
    );
};
