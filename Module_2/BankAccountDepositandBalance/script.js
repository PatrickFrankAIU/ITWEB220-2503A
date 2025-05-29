let balance = 1000.00;

function deposit() {
  let input = prompt("How much would you like to deposit?");
  if (input === null) return;

  let amount = parseFloat(input);

  while (isNaN(amount) || amount <= 0) {
    input = prompt("Invalid input. Enter a positive number:");
    if (input === null) return;
    amount = parseFloat(input);
  }

  balance += amount;
  document.getElementById("balance").textContent =
    "Current Balance: $" + balance.toFixed(2);

  launchEmojiBalloons(amount); 
}

function launchEmojiBalloons(amount) {
  const container = document.getElementById("celebration");
  const colors = ["🎈", "🎉", "🎊"];

  const numberOfBalloons = Math.floor(amount); // No limit
  for (let i = 0; i < numberOfBalloons; i++) {
    const balloon = document.createElement("span");
    balloon.className = "balloon-emoji";
    balloon.textContent = colors[Math.floor(Math.random() * colors.length)];

    // Random horizontal position (0% to 100%)
    balloon.style.left = `${Math.random() * 100}%`;

    // Random animation duration and delay
    const duration = (Math.random() * 2 + 2).toFixed(2); // 2–4 sec
    const delay = (Math.random() * 1).toFixed(2);        // 0–1 sec

    balloon.style.animationDuration = `${duration}s`;
    balloon.style.animationDelay = `${delay}s`;

    container.appendChild(balloon);

    // Remove the element after it's done
    setTimeout(() => balloon.remove(), (parseFloat(duration) + parseFloat(delay)) * 1000);
  }
}
