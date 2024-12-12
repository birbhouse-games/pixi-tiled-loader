// Local imports
import { TiledObject } from './TiledObject';





export interface Rectangle extends TiledObject {
	height: number,

	type: 'rectangle',

	width: number,
}
