/* eslint-env node */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'@trezy-studios/eslint-config',
		'@trezy-studios/eslint-config-electron',
		'@trezy-studios/eslint-config-react',
	],
}
