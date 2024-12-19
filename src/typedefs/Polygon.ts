// Local imports
import { CustomProperties } from './CustomProperties'
import { TiledObject } from './TiledObject'
import { Vector2 } from './Vector2'





export interface Polygon<CustomPropertiesType extends CustomProperties = CustomProperties> extends TiledObject<CustomPropertiesType> {
	points: Vector2[],

	type: 'polygon',
}
