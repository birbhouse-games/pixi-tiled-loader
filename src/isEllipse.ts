// Local imports
import { Ellipse } from './typedefs/Ellipse'
import { TiledObject } from './typedefs/TiledObject'





export function isEllipse(object: Ellipse | TiledObject, objectElement?: Element): object is Ellipse {
	let result = objectElement
		? Boolean(objectElement.querySelector(':scope > ellipse'))
		: object.type === 'ellipse'

	if (result) {
		object.type = 'ellipse'
	}

	return result
}
