// Local imports
import { TiledObject } from './TiledObject';





export interface Ellipse extends TiledObject {
	height: number,

	type: 'ellipse',

	width: number,
}
