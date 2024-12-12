export function createXMLElement(string: string): Element | null {
	const parser = new DOMParser
	const document = parser.parseFromString(string, 'text/xml')

	return document.firstElementChild
}
