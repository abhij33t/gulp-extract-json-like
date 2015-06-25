'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var extractJsonLike = require('./');

it('should ', function (cb) {
	var stream = extractJsonLike();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString(), '[{"valid":"json"}, {invalid json}, {"another":["j", "s", "o", "n"]}, {"deep":{"json":{}}}, { "weird":		"formatted", " ":1		}, [{}, {}, {}]]');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/file.ext',
		contents: new Buffer('valid json {"valid":"json"} something between {invalid json} another json {"another":["j", "s", "o", "n"]} deep json {"deep":{"json":{}}} weird formatted { "weird":		"formatted", " ":1		} and finally array [{}, {}, {}]')
	}));

	stream.end();
});
