import Ember from 'ember';
import fillInLabel from './fill-in-label';

Ember.Test.registerAsyncHelper('fillForm', function(app, i18nKeysAndValues) {
  const promises = Object.keys(i18nKeysAndValues).map(i18nKey => {
    const value = i18nKeysAndValues[i18nKey];

    return fillInLabel(app, i18nKey, value);
  });

  return Ember.RSVP.all(promises);
});
