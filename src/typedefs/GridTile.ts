// Local imports
import { BaseTile } from './BaseTile'





export interface GridTile extends BaseTile {
	/** @description The X position of this tile in the source image. */
	x: number,

	/** @description The Y position of this tile in the source image. */
	y: number,
}
