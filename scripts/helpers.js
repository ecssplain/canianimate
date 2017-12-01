/**
 * Common config and helpers for build scripts.
 */

var fs = require('fs-extra'),
    path = require('path');

var helpers = module.exports = {};

helpers.path = function (filepath) {
    return path.join(helpers.rootDir, filepath);
};

helpers.checkdir = function (dirname) {
    var fullpath = helpers.path(dirname);
    fs.ensureDirSync(fullpath);
    return fullpath;
};

helpers.rootDir   = path.resolve(__dirname + '/../');
helpers.buildDir  = helpers.checkdir('_build');
helpers.deployDir = helpers.checkdir('_deploy');

helpers.processedCssName = 'prefixed';

helpers.parts = function (filepath) {
    var parts = {};
    parts.ext = path.extname(filepath);
    parts.filename = path.basename(filepath, parts.ext);
    parts.dirname  = path.dirname(filepath);
    return parts;
};

helpers.processedPath = function (filepath) {
    var parts = helpers.parts(filepath);
    var newname = parts.filename + '.' + helpers.processedCssName + parts.ext;
    return path.join(helpers.buildDir, newname);
};
