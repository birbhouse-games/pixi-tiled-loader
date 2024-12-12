// Local imports
import { type CustomProperties } from './CustomProperties'
import { type GroupLayer } from './GroupLayer'
import { type Layer } from './Layer'
import { type ObjectLayer } from './ObjectLayer'
import { type Orientation } from './Orientation'
import { type RenderOrder } from './RenderOrder'
import { type TilemapTilesetDefinitions } from './TilemapTilesetDefinitions'





export interface Tilemap {
	customProperties?: CustomProperties,
	layers: (GroupLayer | Layer | ObjectLayer)[],
	metadata: {
		height: number,
		infinite: boolean,
		nextLayerID: number,
		nextObjectID: number,
		orientation: Orientation,
		renderOrder: RenderOrder,
		tiledVersion: string,
		tileHeight: number,
		tileWidth: number,
		version: string,
		width: number,
	},
	tilesets: TilemapTilesetDefinitions,
}
