// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { isRectangle } from '../../src/isRectangle'





describe('isRectangle', function() {
	it('shouldn\'t fail', function() {
		return expect(isRectangle).to.be.a('function')
	})
})
