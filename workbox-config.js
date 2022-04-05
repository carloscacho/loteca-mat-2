module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,md,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};