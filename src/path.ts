/**
 * Retrieves the base name of the path's target. This could be either a directory name or a file name.
 *
 * @param path The path from which to extract the base name.
 * @param extension An extension to be removed from the base name.
 * @returns The parsed base name.
 */
export function basename(path: string, extension?: string) {
	const split = path.split(sep)

	let target = split.pop()

	if (!target) {
		return ''
	}

	if (extension) {
		// eslint-disable-next-line security/detect-non-literal-regexp
		target = target.replace(new RegExp(extension.replace('.', '\\.'), 'u'), '')
	}

	return target.replace(new RegExp(`\\${sep}+$`, 'u'), '')
}

/**
 * Retrieves the directory name of the path.
 *
 * @param path The path from which to extract the directory name.
 * @returns The parsed directory name.
 */
export function dirname(path: string) {
	const split = path.split(sep)

	split.pop()

	return split.join(sep ?? '')
}

/**
 * Joins paths.
 *
 * @param paths The paths to be joined.
 * @returns The joined path.
 */
export function join(...paths: string[]) {
	const parsedPaths = paths
		.reduce((accumulator, path) => {
			const normalisedPath = path
				.replace(new RegExp(`^\\${sep}`, 'u'), '')
				.replace(new RegExp(`\\${sep}$`, 'u'), '')

			normalisedPath
				.split(sep)
				.forEach(segment => {
					switch (segment) {
						case '..':
							accumulator.pop()
							break

						case '.':
							break

						default:
							accumulator.push(segment)
					}
				})

			return accumulator
		}, [] as string[])

	return `${sep}${parsedPaths.join(sep)}`
}

export const sep = '/'
