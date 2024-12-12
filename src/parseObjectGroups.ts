// Local imports
import { parseObjectGroup } from './parseObjectGroup'
import { type TiledObjectGroup } from './typedefs/TiledObjectGroup'





export function parseObjectGroups<T extends { objectGroups?: TiledObjectGroup[] } = {}>(element: Element, target: T) {
	const objectGroupElements = Array.from(element.querySelectorAll(':scope > objectgroup'))

	if (!objectGroupElements.length) {
		return
	}

	target.objectGroups = objectGroupElements.map(objectGroupElement => {
		return parseObjectGroup(objectGroupElement)
	})
}
