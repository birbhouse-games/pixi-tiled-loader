// Local imports
import { type Layer } from './Layer'
import { type ObjectLayer } from './ObjectLayer'





export interface GroupLayer {
	id: number,

	layers: (GroupLayer | Layer | ObjectLayer)[],

	name: string,

	type: 'group',
}
