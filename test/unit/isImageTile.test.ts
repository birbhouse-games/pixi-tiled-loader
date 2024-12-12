// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { isImageTile } from '../../src/isImageTile'





describe('isImageTile', function() {
	it('shouldn\'t fail', function() {
		return expect(isImageTile).to.be.a('function')
	})
})
