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
	const idCommandElement = document.getElementById("id-command");
	const aboutMeSection = document.getElementById("about-me");

	const command = "whoami";
	const name = "Connor Keevill";

	await typeTextInElement(command, whoamiCommand);
	await sleep(250);
	await typeTextInElement(name, outputElement, 90);
	idCommandElement.style.visibility = "visible";
	await sleep(300);
	await typeTextInElement("id", idCommandElement)

	await sleep(250)
	aboutMeSection.style.visibility = "visible";
});
