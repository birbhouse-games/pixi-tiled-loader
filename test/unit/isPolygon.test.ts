// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { isPolygon } from '../../src/isPolygon'





describe('isPolygon', function() {
	it('shouldn\'t fail', function() {
		return expect(isPolygon).to.be.a('function')
	})
})
