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

			// find JSON like objects {} and arrays []
			var objects = XRegExp.matchRecursive(contents, '(\\[|\\{)', '(\\}|\\])', 'g', {
				valueNames: [null, 'left', 'match', 'right']
			});

			// wrap them in {}, or in [] respectively
			var result = [];
			for (var i = 1; i < objects.length; i++) {
				if (objects[i].value == 'match') {
					result.push(objects[i-1].name + objects[i].name + objects[i+1].name);
				}
			}

			result = '[' + result.join(', ') + ']';

			file.contents = new Buffer(result);
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-extract-json-like', err));
		}

		cb();
	});
};
