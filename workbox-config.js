module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,html,json,md,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};