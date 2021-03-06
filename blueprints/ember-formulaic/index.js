'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var predefs = [
      '    "clickOn",',
      '    "fillForm",',
    ].join('\n');

    this.insertIntoFile('tests/.jshintrc',  predefs, {
      after: '"predef": [\n'
    });

    return this.addAddonToProject('ember-i18n', '~> 4.1.0');
  }
};
