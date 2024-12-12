// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { TiledTilemapLoader } from '../../src/TiledTilemapLoader'





describe('TiledTilemapLoader', function() {
	it('shouldn\'t fail', function() {
		return expect(TiledTilemapLoader).to.be.a('function')
	})
})
