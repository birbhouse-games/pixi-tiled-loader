// Local imports
import { Polygon } from './typedefs/Polygon'
import { TiledObject } from './typedefs/TiledObject'





export function isPolygon(object: Polygon | TiledObject, objectElement?: Element): object is Polygon {
	const result = objectElement
		? Boolean(objectElement.querySelector(':scope > polygon'))
		: object.type === 'polygon'

	if (result) {
		object.type = 'polygon'
	}

	return result
}
