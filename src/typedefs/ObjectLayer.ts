// Local imports
import { TiledObjectGroup } from './TiledObjectGroup'




export interface ObjectLayer extends TiledObjectGroup {
	name: string,

	type: 'object',
}
