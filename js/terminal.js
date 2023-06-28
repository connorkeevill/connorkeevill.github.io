import sleep from "./utils.js";

/**
 * "Types" the given text into the given element.
 * 
 * @param {*} text the text to type.
 * @param {*} element the element to type the text in.
 */
export default async function typeTextInElement(text, element) {
    let index = 0;

    for(let char of text)
    {
        element.innerHTML += char;
        await sleep(150);
    }
}