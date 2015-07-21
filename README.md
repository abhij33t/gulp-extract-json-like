# Gulp Extract JSON (like)

[Gulp](http://gulpjs.com) plugin for extracting JSON like strings from text.

## Install

```
$ npm install --save-dev gulp-extract-json-like
```

## Usage

```js
var gulp = require('gulp');
var extractJsonLike = require('gulp-extract-json-like');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(extractJsonLike())
		.pipe(gulp.dest('dist'));
});
```

## But why?

Imagine that you have one huge document in [API Blueprint](https://apiblueprint.org) format with HTTP requests and responses in JSON format – or rather you _expect_ them to be valid JSONs.

Since the JSON validators take as an input only JSON string, you cannot pass the whole document into it – validation would always fail because of other text.

And that's the exact moment when this plugin comes handy. It finds all JSON like strings and outputs them as an array of JSON strings which you can then pass right into some JSON validator.

## License

MIT © [Samir Djellil](http://samirdjellil.com)
