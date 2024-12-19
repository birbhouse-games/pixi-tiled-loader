// Local imports
import { Ellipse } from './typedefs/Ellipse'
import { isEllipse } from './isEllipse'
import { isPoint } from './isPoint'
import { isPolygon } from './isPolygon'
import { isRectangle } from './isRectangle'
import { parseCustomProperties } from './parseCustomProperties'
import { Point } from './typedefs/Point'
import { Polygon } from './typedefs/Polygon'
import { Rectangle } from './typedefs/Rectangle'
import { Vector2 } from './typedefs/Vector2'





export function parseObject(objectElement: Element): Ellipse | Point | Polygon | Rectangle {
	let object = {
		id: Number(objectElement.getAttribute('id')),
		x: Number(objectElement.getAttribute('x')),
		y: Number(objectElement.getAttribute('y')),
	} as Ellipse | Point | Polygon | Rectangle

	parseCustomProperties(objectElement, object)

	const classType = objectElement.getAttribute('type')
	if (classType) {
		object.class = classType
	}

	if (isPoint(object, objectElement)) {
		// Do nothing
	} else if (isPolygon(object, objectElement)) {
		const polygonElement = objectElement.querySelector(':scope > polygon')!
		const points = polygonElement?.getAttribute('points')!

		let minX = 0
		let minY = 0

		object.points = points
			.split(' ')
			.map((coordinateString) => {
				const [x, y] = coordinateString
					.split(',')
					.map(Number)

				minX = Math.min(minX, x)
				minY = Math.min(minY, y)

				return { x, y }
			})
			.map((point: Vector2) => {
				return {
					x: point.x - minX,
					y: point.y - minY,
				}
			})

			object.x = object.x + minX
			object.y = object.y + minY
	} else if (isEllipse(object, objectElement) || isRectangle(object, objectElement)) {
		object.height = Number(objectElement.getAttribute('height'))
		object.width = Number(objectElement.getAttribute('width'))
	}

	return object
}
