import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import './test-helpers';

function setupI18n(application) {
  const i18n = application.__container__.lookup('service:i18n');

  i18n.on('missing', (locale, key) => {
    throw new Error(`Missing Translation (${locale}): "${key}"`);
  });
}

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    setupI18n(application);
  });

  return application;
}
