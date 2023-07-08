import typeTextInElement from "./js/terminal.js";
import sleep from "./js/utils.js";

document.addEventListener('DOMContentLoaded', async function() {
  const commandElement = document.getElementById('command');
  const commandCursorElement = document.getElementById('command-cursor');
  const outputElement = document.getElementById('name');
  const postCursorElement = document.getElementById('post-cursor');

  const command = 'whoami';
  const name = "Connor Keevill";

  await typeTextInElement(command, commandElement);
  await sleep(300);
  commandCursorElement.style.display = "none";
  await typeTextInElement(name, outputElement);
  postCursorElement.style.display = "block";
});