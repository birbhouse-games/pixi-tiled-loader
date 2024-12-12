// Local imports
import { type GroupLayer } from './typedefs/GroupLayer'
import { type Layer } from './typedefs/Layer'
import { type ObjectLayer } from './typedefs/ObjectLayer'
import { parseGroupLayer } from './parseGroupLayer'
import { parseLayer } from './parseLayer'
import { parseObjectGroup } from './parseObjectGroup'





export function parseLayers(element: Element) {
	const result = []

	const layerElements = Array.from(element.querySelectorAll(':scope > layer, :scope > group, :scope > objectgroup'))

	for (const layerElement of layerElements) {
		let layer: GroupLayer | Layer | ObjectLayer

		if (/^group$/iu.test(layerElement.nodeName)) {
			layer = parseGroupLayer(layerElement)
		} else if (/^objectgroup$/iu.test(layerElement.nodeName)) {
			layer = parseObjectGroup<ObjectLayer>(layerElement)
			layer.type = 'object'
		} else {
			layer = parseLayer(layerElement)
		}

		result.push(layer)
	}

	return result
}
