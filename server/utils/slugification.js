'use strict';

const slugify = require('@sindresorhus/slugify');
const { transliterate, slugify: slugifyTransliterate } = require('transliteration');
const slugifyWithCount = slugify.counter();

const toSlug = (string, options) => slugifyTransliterate(string, options);
const toSlugWithCount = (string, options) => slugifyWithCount(transliterate(string), options);

module.exports = {
	toSlug,
	toSlugWithCount,
};
