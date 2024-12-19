// Module imports
import {
	type Loader,
	Rectangle,
	type ResolvedAsset,
	Spritesheet,
	type SpritesheetData,
	Texture,
} from 'pixi.js'





// Local imports
import { type GridTile } from './typedefs/GridTile'
import { type ImageTile } from './typedefs/ImageTile'
import { isImageTile } from './isImageTile'
import * as path from './path'
import { parseCustomProperties } from './parseCustomProperties'
import { type TiledTilesetLoaderConfig } from './typedefs/TiledTilesetLoaderConfig'
import { type Tileset } from './typedefs/Tileset'
import { parseObjectGroups } from './parseObjectGroups'





export async function parseTileset(config: TiledTilesetLoaderConfig & {
	asset: ResolvedAsset,
	loader: Loader,
	xml: Document,
}) {
	const {
		asset,
		loader,
		loadImages,
		xml,
	} = config

	const tilesetElement = xml.querySelector('tileset')

	if (!tilesetElement) {
		throw new Error('Invalid Tiled tileset.')
	}

	const tilesetDirectory = path.dirname(asset.src!)

	const tileset: Tileset = {
		metadata: {
			columns: Number(tilesetElement.getAttribute('columns')),
			name: tilesetElement.getAttribute('name')!,
			tileCount: Number(tilesetElement.getAttribute('tilecount')),
			tiledVersion: tilesetElement.getAttribute('tiledversion')!,
			tileHeight: Number(tilesetElement.getAttribute('tileheight')),
			tileWidth: Number(tilesetElement.getAttribute('tilewidth')),
			version: tilesetElement.getAttribute('version')!,
		},
		tiles: {},
	}

	parseCustomProperties(tilesetElement, tileset)

	const imageElement = xml.querySelector<Element>('tileset > image')

	let spritesheetData: SpritesheetData | null = null
	let spritesheetTexture: Texture | null = null

	if (imageElement) {
		const source = path.join(tilesetDirectory, imageElement.getAttribute('source')!)

		tileset.image = {
			height: Number(imageElement.getAttribute('height')),
			source,
			width: Number(imageElement.getAttribute('width')),
		}

		if (loadImages) {
			spritesheetData = {
				frames: {},
				meta: {
					image: source,
					scale: 1,
					size: {
						h: tileset.image.height,
						w: tileset.image.width,
					},
				},
			}

			spritesheetTexture = await loader.load(source)
			spritesheetTexture!.label = source
		}
	}

	let tileIndex = 0

	while (Object.keys(tileset.tiles).length < tileset.metadata.tileCount) {
		const tile = {
			id: tileIndex,
			height: tileset.metadata.tileHeight,
			width: tileset.metadata.tileWidth,
		} as GridTile | ImageTile

		const tileElement = tilesetElement.querySelector(`tile#${CSS.escape(`${tileIndex}`)}`)

		if (tileElement) {
			parseCustomProperties(tileElement, tile)
			parseObjectGroups(tileElement, tile)

			const tileProbability = tileElement.getAttribute('probability')

			if (tileProbability) {
				tile.probability = Number(tileProbability)
			}

			const tileType = tileElement.getAttribute('type')

			if (tileType) {
				tile.class = tileType
			}

			const tileImageElement = tileElement.querySelector<Element>('image')

			if (isImageTile(tile, tileImageElement)) {
				tile.source = path.join(tilesetDirectory, tileImageElement!.getAttribute('source')!)
				tile.imageHeight = Number(tileImageElement!.getAttribute('height'))
				tile.imageWidth = Number(tileImageElement!.getAttribute('width'))
				tile.height = Number(tileElement.getAttribute('height') ?? tile.imageHeight)
				tile.width = Number(tileElement.getAttribute('width') ?? tile.imageWidth)
				tile.x = Number(tileElement.getAttribute('x') ?? 0)
				tile.y = Number(tileElement.getAttribute('y') ?? 0)

				if (loadImages) {
					let baseTexture = await loader.load<Texture>(tile.source)
					tile.texture = new Texture({
						frame: new Rectangle(tile.x, tile.y, tile.width, tile.height),
						source: baseTexture.source,
						orig: new Rectangle(0, 0, tile.width, tile.height),
					})
					tile.texture.label = tile.source
				}
			} else {
				tile.x = (tile.id % tileset.metadata.columns) * tileset.metadata.tileWidth
				tile.y = Math.floor(tile.id / tileset.metadata.columns) * tileset.metadata.tileHeight
			}
		} else {
			tile.x = (tile.id % tileset.metadata.columns) * tileset.metadata.tileWidth
			tile.y = Math.floor(tile.id / tileset.metadata.columns) * tileset.metadata.tileHeight

			spritesheetData!.frames[tile.id] = {
				anchor: {
					x: 0,
					y: 0,
				},
				frame: {
					h: tile.height,
					w: tile.width,
					x: tile.x,
					y: tile.y,
				},
				sourceSize: {
					h: tile.height,
					w: tile.width,
				},
			}
		}

		tileset.tiles[tileIndex] = tile

		tileIndex += 1
	}

	if (spritesheetData && spritesheetTexture) {
		tileset.spritesheet = new Spritesheet(spritesheetTexture, spritesheetData)
		await tileset.spritesheet.parse()

		for (const tileID in tileset.tiles) {
			tileset.tiles[tileID].texture = tileset.spritesheet.textures[tileID]
		}
	}

	return tileset
}
