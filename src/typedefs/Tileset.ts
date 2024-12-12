// Module imports
import { Spritesheet } from 'pixi.js'





// Local imports
import { type CustomProperties } from './CustomProperties'
import { type GridTile } from './GridTile'
import { type ImageTile } from './ImageTile'





export interface Tileset {
	customProperties?: CustomProperties,
	image?: {
		height: number,
		source: string,
		width: number,
	},
	metadata: {
		columns: number,
		name: string,
		tileCount: number,
		tiledVersion: string,
		tileHeight: number,
		tileWidth: number,
		version: string,
	},
	spritesheet?: Spritesheet,
	tiles: Record<string, GridTile | ImageTile>,
}
