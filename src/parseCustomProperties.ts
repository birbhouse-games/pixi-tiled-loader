// Local imports
import { type CustomBool } from './typedefs/CustomBool'
import { type CustomColor } from './typedefs/CustomColor'
import { type CustomFloat } from './typedefs/CustomFloat'
import { type CustomFile } from './typedefs/CustomFile'
import { type CustomInt } from './typedefs/CustomInt'
import { type CustomObject } from './typedefs/CustomObject'
import { type CustomProperties } from './typedefs/CustomProperties'
import { type CustomPropertyTypeStrings } from './typedefs/CustomPropertyTypeStrings'
import { type CustomString } from './typedefs/CustomString'





export function parseCustomProperties<T extends { customProperties?: CustomProperties } = {}>(element: Element, target: T) {
	const customPropertyElements = Array.from(element.querySelectorAll(':scope > properties property'))

	if (!customPropertyElements.length) {
		return
	}

	target.customProperties = {}

	for (const customPropertyElement of customPropertyElements) {
		const customPropertyName = customPropertyElement.getAttribute('name')!
		const customPropertyType = customPropertyElement.getAttribute('type')! as CustomPropertyTypeStrings
		const customPropertyValue = customPropertyElement.getAttribute('value')!

		switch (customPropertyType) {
			case 'bool':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: customPropertyValue === 'true' ? true : false,
				} as CustomBool
				break

			case 'color':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: customPropertyValue,
				} as CustomColor
				break

			case 'float':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: parseFloat(customPropertyValue),
				} as CustomFloat
				break

			case 'file':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: customPropertyValue,
				} as CustomFile
				break

			case 'int':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: parseInt(customPropertyValue),
				} as CustomInt
				break

			case 'object':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: Number(customPropertyValue),
				} as CustomObject
				break

			case 'string':
				target.customProperties[customPropertyName] = {
					type: customPropertyType,
					value: customPropertyValue,
				} as CustomString
				break
		}
	}
}
