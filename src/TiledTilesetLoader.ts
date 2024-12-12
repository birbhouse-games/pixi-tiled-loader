// Module imports
import {
	checkExtension,
	DOMAdapter,
	ExtensionType,
	type LoaderParser,
	LoaderParserPriority,
} from 'pixi.js'





// Local imports
import { parseTileset } from './parseTileset'
import { type TiledTilesetLoaderConfig } from 'typedefs/TiledTilesetLoaderConfig'





const EXTENSION_NAME = 'TiledTilesetLoader'

export function TiledTilesetLoader(config: TiledTilesetLoaderConfig = {}): LoaderParser {
	return {
		name: EXTENSION_NAME,

		extension: {
			name: EXTENSION_NAME,
			priority: LoaderParserPriority.High,
			type: ExtensionType.LoadParser,
		},

		/**
		 * Tests the asset to determine if it should be handled by this loader.
		 */
		test(url) {
			return checkExtension(url, '.tsx')
		},

		/**
		 * Load a TSX file.
		 */
		async load(url, asset, loader) {
			const adapter = DOMAdapter.get()

			const response = await adapter.fetch(url)
			const tilesetString = await response.text()
			const tileset = adapter.parseXML(tilesetString)

			if (!asset || !loader) {
				return
			}

			const result = await parseTileset({
				...config,
				asset,
				loader,
				xml: tileset,
			})

			return result
		},
	}
}
