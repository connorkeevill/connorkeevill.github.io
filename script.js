import typeTextInElement from "./js/terminal.js";
import sleep from "./js/utils.js";

document.addEventListener('DOMContentLoaded', async function() {
  const commandElement = document.getElementById('command');
  const outputElement = document.getElementById('output');

  const command = 'whoami';
  const name = "Connor Keevill";

  await typeTextInElement(command, commandElement);
  await sleep(300);
  await typeTextInElement(name, outputElement);
});