// Local imports
import { type CustomProperties } from './CustomProperties'
import { type Vector2 } from './Vector2'





export interface TiledObject<CustomPropertiesType extends CustomProperties = CustomProperties> extends Vector2 {
	class?: string,

	customProperties?: CustomPropertiesType,

	id: number,

	type: 'ellipse' | 'point' | 'polygon' | 'rectangle',
}
