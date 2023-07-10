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
	const whoamiCommand = document.getElementById("whoami-command");
	const outputElement = document.getElementById("name-output");
	const aboutMeOutputElement = document.getElementById("about-output");

	// Type first command, wait for the command to be "executed", and type name and tagline.
	await typeTextInElement("whoami", whoamiCommand, 100);
	await sleep(150);
	await typeTextInElement("Connor Keevill", outputElement, 75);
	await sleep(150);
	await typeTextInElement("Computer Scientist, ", aboutMeOutputElement, 40);
	await sleep(150)
	await typeTextInElement("Software Engineer, ", aboutMeOutputElement, 40);
	await sleep(150)
	await typeTextInElement("and Problem Solver.", aboutMeOutputElement, 40);
});
