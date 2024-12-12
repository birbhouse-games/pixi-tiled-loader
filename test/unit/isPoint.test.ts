// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { isPoint } from '../../src/isPoint'





describe('isPoint', function() {
	it('shouldn\'t fail', function() {
		return expect(isPoint).to.be.a('function')
	})
})
