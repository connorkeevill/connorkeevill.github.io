import typeTextInElement from "./js/terminal.js";
import sleep from "./js/utils.js";

$(".tilting-card").each(function () {
	const card = $(this);

	$(document).on("mousemove", function (event) {
		const cardRect = card[0].getBoundingClientRect();
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		const cardCenterX = cardRect.left + cardRect.width / 2;
		const cardCenterY = cardRect.top + cardRect.height / 2;

		const mouseCardX = mouseX - cardCenterX;
		const mouseCardY = mouseY - cardCenterY;

		card.css("--mouse-x", mouseCardX / (cardRect.width / 2));
		card.css("--mouse-y", mouseCardY / (cardRect.height / 2));
	});
});

document.addEventListener("DOMContentLoaded", async function () {
	const commandElement = document.getElementById("command");
	const commandCursorElement = document.getElementById("command-cursor");
	const outputElement = document.getElementById("name");
	const postCursorElement = document.getElementById("post-cursor");

	const command = "whoami";
	const name = "Connor Keevill";

	await typeTextInElement(command, commandElement);
	await sleep(150);
	commandCursorElement.style.display = "none";
	await typeTextInElement(name, outputElement);
	postCursorElement.style.visibility = "visible";
});
