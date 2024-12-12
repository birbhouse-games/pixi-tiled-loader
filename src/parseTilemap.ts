// Module imports
import {
	type Loader,
	type ResolvedAsset,
} from 'pixi.js'





// Local imports
import { parseLayers } from './parseLayers'
import { type Orientation } from './typedefs/Orientation'
import { parseCustomProperties } from './parseCustomProperties'
import * as path from './path'
import { type RenderOrder } from './typedefs/RenderOrder'
import { type TiledTilemapLoaderConfig } from './typedefs/TiledTilemapLoaderConfig'
import { type Tilemap } from './typedefs/Tilemap'
import { type TilemapTilesetDefinition } from './typedefs/TilemapTilesetDefinition'
import { type TilemapTilesetDefinitions } from './typedefs/TilemapTilesetDefinitions'





export async function parseTilemap(config: TiledTilemapLoaderConfig & {
	asset: ResolvedAsset,
	loader: Loader,
	xml: Document,
}) {
	const {
		asset,
		loader,
		loadTilesets,
		xml,
	} = config

	const mapElement = xml.querySelector('map')

	if (!mapElement) {
		throw new Error('Invalid Tiled map.')
	}

	const tilemapDirectory = path.dirname(asset.src!)

	const tilesets: TilemapTilesetDefinitions = {}
	const tilesetElements = Array.from(mapElement.querySelectorAll('tileset'))

	for (const tilesetElement of tilesetElements) {
		const source = path.join(tilemapDirectory, tilesetElement.getAttribute('source')!)

		const tileset: TilemapTilesetDefinition = {
			firstGid: Number(tilesetElement.getAttribute('firstgid')),
			source,
		}

		if (loadTilesets) {
			tileset.tileset = await loader.load(source)
		}

		tilesets[source] = tileset
	}

	const result: Tilemap = {
		metadata: {
			height: Number(mapElement.getAttribute('height')),
			infinite: Boolean(mapElement.getAttribute('infinite')),
			nextLayerID: Number(mapElement.getAttribute('nextlayerid')),
			nextObjectID: Number(mapElement.getAttribute('nextobjectid')),
			orientation: mapElement.getAttribute('orientation') as Orientation,
			renderOrder: mapElement.getAttribute('renderorder') as RenderOrder,
			tiledVersion: mapElement.getAttribute('tiledversion') as string,
			tileHeight: Number(mapElement.getAttribute('tileheight')),
			tileWidth: Number(mapElement.getAttribute('tilewidth')),
			version: mapElement.getAttribute('version') as string,
			width: Number(mapElement.getAttribute('width')),
		},
		layers: parseLayers(mapElement),
		tilesets,
	}

	parseCustomProperties(mapElement, result)

	return result
}
