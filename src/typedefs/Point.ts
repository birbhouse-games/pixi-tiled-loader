// Local imports
import { CustomProperties } from './CustomProperties'
import { TiledObject } from './TiledObject'





export interface Point<CustomPropertiesType extends CustomProperties = CustomProperties> extends TiledObject<CustomPropertiesType> {
	type: 'point',
}
