'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var extractJsonLike = require('./');

it('should ', function (cb) {
	var stream = extractJsonLike();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString(), '[{"valid":"json"}, {invalid json}, {"deep":["a", "b", "c"]}]');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/file.ext',
		contents: new Buffer('valid json {"valid":"json"} something between {invalid json} deep json {"deep":["a", "b", "c"]}')
	}));

	stream.end();
});
