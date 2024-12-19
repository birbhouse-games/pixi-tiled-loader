export interface CustomString<ValueType extends string = string> {
	type: 'string',

	value: ValueType,
}
