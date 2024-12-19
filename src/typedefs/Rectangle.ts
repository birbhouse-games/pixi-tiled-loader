// Local imports
import { CustomProperties } from './CustomProperties'
import { TiledObject } from './TiledObject'





export interface Rectangle<CustomPropertiesType extends CustomProperties = CustomProperties> extends TiledObject<CustomPropertiesType> {
	height: number,

	type: 'rectangle',

	width: number,
}
