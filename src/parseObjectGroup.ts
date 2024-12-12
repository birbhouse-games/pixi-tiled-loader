// Local imports
import { parseObject } from './parseObject'
import { type TiledObjectGroup } from 'typedefs/TiledObjectGroup'





export function parseObjectGroup<T extends TiledObjectGroup = TiledObjectGroup>(element: Element) {
	const objects = Array
		.from(element.querySelectorAll(':scope > object'))
		.map(parseObject)

	const result: TiledObjectGroup = {
		drawOrder: element.getAttribute('draworder')!,
		id: Number(element.getAttribute('id')),
		objects,
	}

	const name = element.getAttribute('name')

	if (name) {
		result.name = name
	}

	return result as T
}
