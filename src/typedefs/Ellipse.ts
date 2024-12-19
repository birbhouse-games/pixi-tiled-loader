// Local imports
import { CustomProperties } from './CustomProperties'
import { TiledObject } from './TiledObject'





export interface Ellipse<CustomPropertiesType extends CustomProperties = CustomProperties> extends TiledObject<CustomPropertiesType> {
	height: number,

	type: 'ellipse',

	width: number,
}
