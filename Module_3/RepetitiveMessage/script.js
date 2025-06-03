const chalkboard = document.getElementById("chalkboard");
const message = "I will not waste chalk.";
const repeatCount = 4;

function typeLine(text, lineNumber) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      chalkboard.textContent += text[i];
    }, (i * 50) + lineNumber * (text.length * 50 + 300));
  }

  // Add a line break after full message
  setTimeout(() => {
    chalkboard.textContent += "\n";
  }, text.length * 50 + lineNumber * (text.length * 50 + 300));
}

function startWriting() {
  chalkboard.textContent = ""; // Clear previous attempts

  // For loop version
  for (let line = 0; line < repeatCount; line++) {
    typeLine(message, line);
  }

  /*
  // WHILE loop version 
  let line = 0;
  while (line < repeatCount) {
    typeLine(message, line);
    line++;
  }
  */
}

document.getElementById("startBtn").addEventListener("click", startWriting);
