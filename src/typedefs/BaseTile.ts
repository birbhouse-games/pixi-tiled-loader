// Module imports
import { Texture } from 'pixi.js'





// Local imports
import { type CustomProperties } from './CustomProperties'
import { type TiledObjectGroup } from './TiledObjectGroup'





export interface BaseTile {
	/** @description The ID of this tile within its tileset. */
	customProperties?: CustomProperties,

	/** @description The height of the render bounding box. */
	height: number,

	/** @description The ID of this tile within its tileset. */
	id: number,

	/** @description The height of the render bounding box. */
	objectGroups?: TiledObjectGroup[],

	/** @description The probability of this tile being selected, weighted against all other tiles in the tileset. */
	probability?: number,

	/** @description The texture for this tile. */
	texture?: Texture

	/** @description The type of the tile. Displayed as "Class" in Tiled. */
	type?: string,

	/** @description The width of the render bounding box. */
	width: number,
}
