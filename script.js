document.addEventListener('DOMContentLoaded', function() {
  const commandElement = document.querySelector('.command');
  const outputElement = document.querySelector('.output');

  const command = 'whoami';
  const name = 'Connor Keevill';

  typeCommand(command, commandElement, function() {
    executeCommand(name, outputElement);
  });
});

function executeCommand(output, element) {
  setTimeout(function() {
    element.textContent += output;
  }, 1000);
}

function typeCommand(command, element, callback) {
    let index = 0;
  
    function typeNextCharacter() {
      if (index < command.length) {
        const character = command.charAt(index);
        element.innerHTML += character;
        index++;
        setTimeout(typeNextCharacter, 100);
      } else {
        callback();
      }
    }
  
    typeNextCharacter();
  }
  
  function showCursor(element) {
    const cursorElement = document.createElement('span');
    cursorElement.className = 'cursor';
    element.appendChild(cursorElement);
  }
