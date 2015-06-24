'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var XRegExp = require('xregexp').XRegExp;

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-extract-json-like', 'Streaming not supported'));
			return;
		}

		try {
			var contents = file.contents.toString();
			var result = XRegExp.matchRecursive(contents, '{', '}', 'gm');

			result = result.join("}, {");
			result = "[{" + result + "}]";

      file.contents = new Buffer(result);
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-extract-json-like', err));
		}

		cb();
	});
};
