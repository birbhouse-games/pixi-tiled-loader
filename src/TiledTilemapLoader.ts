// Module imports
import {
	checkExtension,
	DOMAdapter,
	ExtensionType,
	type LoaderParser,
	LoaderParserPriority,
} from 'pixi.js'





// Local imports
import { parseTilemap } from './parseTilemap'
import { type TiledTilemapLoaderConfig } from './typedefs/TiledTilemapLoaderConfig'





const EXTENSION_NAME = 'TiledTilemapLoader'

export function TiledTilemapLoader(config: TiledTilemapLoaderConfig = {}): LoaderParser {
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
			return checkExtension(url, '.tmx')
		},

		/**
		 * Load a TMX file.
		 */
		async load(url, asset, loader) {
			const adapter = DOMAdapter.get()

			const response = await adapter.fetch(url)
			const tilemapString = await response.text()
			const tilemap = adapter.parseXML(tilemapString)

			if (!asset || !loader) {
				return
			}

			return parseTilemap({
				...config,
				asset,
				loader,
				xml: tilemap,
			})
		},
	}
}
