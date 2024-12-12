// Local imports
import { type GroupLayer } from './typedefs/GroupLayer'
import { parseLayers } from './parseLayers'





export function parseGroupLayer(element: Element): GroupLayer {
	return {
		id: Number(element.getAttribute('id')),
		layers: parseLayers(element),
		name: element.getAttribute('name')!,
		type: 'group',
	}
}
