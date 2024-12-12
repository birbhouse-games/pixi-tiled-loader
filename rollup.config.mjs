// Module imports
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import fs from 'node:fs/promises'
import json from '@rollup/plugin-json'
import path from 'node:path'
import resolve from '@rollup/plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'





// Functions

/**
 * Escapes the `RegExp` special characters.
 * @param {string} str
 */
function escapeRegExp(str)
{
	return str.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&')
}

/**
 * Convert the name of a package to a `RegExp` that matches the package's export names.
 * @param {string} packageName
 */
function convertPackageNameToRegExp(packageName)
{
	return new RegExp(`^${escapeRegExp(packageName)}(/.+)?$`)
}





// Constants
const moduleTarget = 'es2020'
const paths = {
	distributable: path.join(process.cwd(), 'dist'),
	library: path.join(process.cwd(), 'lib'),
	source: path.join(process.cwd(), 'src'),
}
const packageJSONString = await fs.readFile('./package.json', 'utf8')
const packageData = JSON.parse(packageJSONString)
const external = Object.keys(packageData.peerDependencies).map(convertPackageNameToRegExp)





export default {
	input: 'src/index.ts',
	output: [
		{
			dir: paths.library,
			entryFileNames: '[name].js',
			exports: 'named',
			format: 'cjs',
			preserveModules: true,
			preserveModulesRoot: paths.source,
			sourcemap: true,
		},
		{
			dir: paths.library,
			entryFileNames: '[name].mjs',
			exports: 'named',
			format: 'esm',
			preserveModules: true,
			preserveModulesRoot: paths.source,
			sourcemap: true,
		},
		{
			dir: paths.distributable,
			entryFileNames: '[name].js',
			exports: 'named',
			format: 'cjs',
			sourcemap: true,
		},
		{
			dir: paths.distributable,
			entryFileNames: '[name].mjs',
			exports: 'named',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		esbuild({ target: moduleTarget }),
		sourcemaps(),
		resolve({
			browser: true,
			preferBuiltins: false,
		}),
		commonjs(),
		json(),
	],
	external,
	treeshake: false
}
