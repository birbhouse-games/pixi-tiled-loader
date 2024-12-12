// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { TiledTilesetLoader } from '../../src/TiledTilesetLoader'





describe('TiledTilesetLoader', function() {
	it('shouldn\'t fail', function() {
		return expect(TiledTilesetLoader).to.be.a('function')
	})
})
