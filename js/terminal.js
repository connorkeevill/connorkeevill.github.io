import sleep from "./utils.js";

/**
 * "Types" the given text into the given element.
 *
 * @param {*} text the text to type.
 * @param {*} element the element to type the text in.
 * @param {*} keystrokeTime how long it takes to type each character.
 */
export default async function typeTextInElement(text, element, keystrokeTime=150) {
	let index = 0;

	for (let char of text) {
		element.innerHTML += char;
		await sleep(keystrokeTime);
	}
}
