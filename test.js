import test from 'ava';
import markdownExtensions from './index.js';

test('main', t => {
	t.true(Array.isArray(markdownExtensions));
	t.true(markdownExtensions.length > 0);
});
