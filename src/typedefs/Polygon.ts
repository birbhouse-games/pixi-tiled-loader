// Local imports
import { TiledObject } from './TiledObject';
import { Vector2 } from './Vector2'





export interface Polygon extends TiledObject {
	points: Vector2[],

	type: 'polygon',
}
