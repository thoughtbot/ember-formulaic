import Ember from 'ember';
import fillInLabel from './fill-in-label';

Ember.Test.registerAsyncHelper('fillForm', function(app, namespace, hash) {
  if (!namespace) {
    throw '`fillForm` expects the first argument to be a String that ' +
          'will be prepended to all I18n keys, or an Object whose keys ' +
          ' are I18n keys.';
  } else if (typeof namespace === 'object') {
    hash = namespace;
    namespace = null;
  }

  const promises = Object.keys(hash).map(i18nKey => {
    const value = hash[i18nKey];
    const namespacedKey = Ember.A([namespace, i18nKey])
      .filter(i => i)
      .join('.');

    return fillInLabel(app, namespacedKey, value);
  });

  return Ember.RSVP.all(promises);
});
