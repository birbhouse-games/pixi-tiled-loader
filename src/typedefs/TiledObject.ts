// Local imports
import { type CustomProperties } from './CustomProperties'
import { type Vector2 } from './Vector2'





export interface TiledObject extends Vector2{
	class?: string,

	customProperties?: CustomProperties,

	id: number,

	type: 'ellipse' | 'point' | 'polygon' | 'rectangle',
}
