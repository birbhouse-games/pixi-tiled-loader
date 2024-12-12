// Local imports
import { type GridTile } from './typedefs/GridTile'
import { type ImageTile } from './typedefs/ImageTile'





export function isImageTile(
	_tile: GridTile | ImageTile,
	image: Element | null,
): _tile is ImageTile {
	return image !== null
}
