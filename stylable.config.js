const s = require('stylable-santa');
const pkg = require('./package.json');

module.exports.options = function (options) {
  return {
    ...options,
    ...s.generatePluginConfig({name: pkg.name, version: pkg.version}, __dirname)
  };

};
