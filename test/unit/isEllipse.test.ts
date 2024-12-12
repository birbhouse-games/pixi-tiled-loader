// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { isEllipse } from '../../src/isEllipse'





describe('isEllipse', function() {
	it('shouldn\'t fail', function() {
		return expect(isEllipse).to.be.a('function')
	})
})
