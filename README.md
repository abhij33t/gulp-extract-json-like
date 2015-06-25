# Gulp Extract JSON (like)

[Gulp](http://gulpjs.com) plugin for extracting JSON like strings from text. The result is an array of strings.

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

Copyright (c) 2015 Samir Djellil

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
