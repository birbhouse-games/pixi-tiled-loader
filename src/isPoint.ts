// Local imports
import { TiledObject } from './typedefs/TiledObject'
import { Point } from './typedefs/Point'





export function isPoint(object: Point | TiledObject, objectElement: Element): object is Point {
	const result = objectElement
		? Boolean(objectElement.querySelector(':scope > point'))
		: object.type === 'point'

	if (result) {
		object.type = 'point'
	}

	return result
}
