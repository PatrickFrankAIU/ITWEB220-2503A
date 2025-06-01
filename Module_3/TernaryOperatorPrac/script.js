let target = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let maxTries = 10;
let score = 0;
let bestTries = null;

function submitGuess() {
  const input = document.getElementById("guessInput");
  const guess = parseInt(input.value);
  const message = document.getElementById("message");
  const triesLeft = document.getElementById("triesLeft");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⛔ Please enter a valid number between 1 and 100!";
    return;
  }

  tries++;
  const feedback = guess === target
    ? "🎉 Correct! You win!"
    : (guess < target ? "🔼 Too low!" : "🔽 Too high!");
  message.textContent = feedback;
  triesLeft.textContent = maxTries - tries;

  if (guess === target) {
    score++;
    if (bestTries === null || tries < bestTries) bestTries = tries;
    updateStats();
    disableInput("🎮 Press RESET to play again.");
  } else if (tries >= maxTries) {
    message.textContent = `💥 Game Over! The number was ${target}.`;
    disableInput("🎮 Press RESET to try again.");
  }

  input.value = "";
  input.focus();
}

function updateStats() {
  document.getElementById("score").textContent = score;
  document.getElementById("best").textContent = bestTries === null ? "-" : bestTries;
}

function disableInput(msg) {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("message").textContent += `\n${msg}`;
}

function resetGame() {
  target = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("message").textContent = "Enter a number between 1 and 100";
  document.getElementById("guessInput").value = "";
  document.getElementById("triesLeft").textContent = maxTries;
}
