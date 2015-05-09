module.exports = {
  normalizeEntityName: function() {},

  locals: function(options) {
    var dasherize = require('../../lib/utils/dasherize');

    return {
      dasherizedPackageName: dasherize(options.project.pkg.name),
      packageName: options.project.pkg.name
    }
  },

  afterInstall: function(options) {
    var cca = require('../../lib/utils/cca');
    var cmd = require('../../lib/utils/cmd');

    return cmd(cca, [
      'create',
      options.project.root + '/external/cordova',
      '--link-to=' + options.project.root + '/external/chrome/manifest.json'
    ], { logStdout: false });
  }
}
