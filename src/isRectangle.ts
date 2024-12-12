// Local imports
import { Rectangle } from './typedefs/Rectangle'
import { TiledObject } from './typedefs/TiledObject'





export function isRectangle(object: Rectangle | TiledObject, objectElement: Element): object is Rectangle {
	const result = objectElement
		? Boolean(
			objectElement.getAttribute('height')
			&& objectElement.getAttribute('width')
		)
		: object.type === 'rectangle'

	if (result) {
		object.type = 'rectangle'
	}

	return result
}
