import typeTextInElement from "./js/terminal.js";
import sleep from "./js/utils.js";

document.addEventListener('DOMContentLoaded', async function() {
  const commandElement = document.getElementById('command');
  const commandCursorElement = document.getElementById('command-cursor');
  const outputElement = document.getElementById('name');
  const outputCursorElement = document.getElementById('output-cursor');

  const command = 'whoami';
  const name = "Connor\nKeevill";

  await typeTextInElement(command, commandElement);
  await sleep(300);
  commandCursorElement.style.display = "none";
  await typeTextInElement(name, outputElement);
  outputCursorElement.style.display = "block";
});