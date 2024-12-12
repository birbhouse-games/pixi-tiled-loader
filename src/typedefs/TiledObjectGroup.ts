// Local imports
import { Ellipse } from './Ellipse'
import { Point } from './Point'
import { Polygon } from './Polygon'
import { Rectangle } from './Rectangle'





export interface TiledObjectGroup {
  drawOrder: string,

	id: number,

	objects: Array<Ellipse | Point | Polygon | Rectangle>,

	name?: string
}
