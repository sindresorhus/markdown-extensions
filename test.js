'use strict';
var test = require('ava');
var markdownExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(markdownExtensions));
	t.assert(markdownExtensions.length > 0);
	t.end();
});
