// Local imports
import { type Layer } from './typedefs/Layer'
import { type LayerDataEncoding } from './typedefs/LayerDataEncoding'





export function parseLayer(layer: Element) {
	const result = {
		data: {},
		metadata: {
			height: Number(layer.getAttribute('height')),
			id: Number(layer.getAttribute('id')),
			name: layer.getAttribute('name') as string,
			visible: Boolean(Number(layer.getAttribute('visible') ?? true)),
			width: Number(layer.getAttribute('width')),
		},
		type: 'layer',
	} as Layer

	const data = layer.querySelector('data')

	if (data) {
		result.data.cells = {}
		result.metadata.encoding = data.getAttribute('encoding') as LayerDataEncoding

		if (result.metadata.encoding === 'csv') {
			data.innerHTML
				.trim()
				.split(',\n')
				.reduce((accumulator, line, lineIndex) => {
					line
						.split(',')
						.forEach((tileID, tileIndex) => {
							if (tileID !== '0') {
								accumulator[`${tileIndex}|${lineIndex}`] = {
									id: Number(tileID),
									x: tileIndex,
									y: lineIndex,
								}
							}
						})

					return accumulator
				}, result.data.cells)
		}
	}

	return result
}
