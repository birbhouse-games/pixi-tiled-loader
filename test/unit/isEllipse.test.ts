// Module imports
import {
	describe,
	expect,
	it,
} from 'vitest'





// Local imports
import { createXMLElement } from '../helpers/createXMLElement'
import { type Ellipse } from '../../src/typedefs/Ellipse'
import { isEllipse } from '../../src/isEllipse'
import { type Rectangle } from '../../src/typedefs/Rectangle'





describe('isEllipse', function() {
	it('is a function', function() {
		return expect(isEllipse).to.be.a('function')
	})

	it('recognises an ellipse element', function() {
		const object = {
			height: 100,
			id: 1,
			width: 100,
			x: 0,
			y: 0,
		} as Ellipse
		const objectElement = createXMLElement(`
			<object
				height="100"
				width="100"
				x="0"
				y="0">
				<ellipse />
			</object>
		`)!

		return expect(isEllipse(object, objectElement)).to.be.true
	})

	it('recognises an ellipse object', function() {
		const object = {
			height: 100,
			id: 1,
			type: 'ellipse',
			width: 100,
			x: 0,
			y: 0,
		} as Ellipse

		return expect(isEllipse(object)).to.be.true
	})

	it('recognises a non-elliptical element', function() {
		const object = {
			height: 100,
			id: 1,
			width: 100,
			x: 0,
			y: 0,
		} as Rectangle
		const objectElement = createXMLElement(`
			<object
				height="100"
				width="100"
				x="0"
				y="0" />
		`)!

		return expect(isEllipse(object, objectElement)).to.be.false
	})

	it('recognises a non-elliptical object', function() {
		const object = {
			height: 100,
			id: 1,
			type: 'rectangle',
			width: 100,
			x: 0,
			y: 0,
		} as Rectangle

		return expect(isEllipse(object)).to.be.false
	})
})
