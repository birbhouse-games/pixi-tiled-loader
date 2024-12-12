// Local imports
import { BaseTile } from './BaseTile'





export interface ImageTile extends BaseTile {
	/** @description The height of the source image. */
	imageHeight: number,

	/** @description The width of the source image. */
	imageWidth: number,

	/** @description The path of the source image. */
	source: string,

	/** @description The X position of the render bounding box. */
	x?: number,

	/** @description The Y position of the render bounding box. */
	y?: number,
}
