// Local imports
import { type LayerDataEncoding } from './LayerDataEncoding'
import { type Cell } from './Cell'

export interface Layer {
	data: {
		cells: Record<`${string}|${string}`, Cell>,
	},
	metadata: {
		encoding: LayerDataEncoding,
		height: number,
		id: number,
		name: string,
		visible: boolean,
		width: number,
	},
	type: 'layer',
}
