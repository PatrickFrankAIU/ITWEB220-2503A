const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let duckCounts = [];

for (let i = 0; i < days.length; i++) {
  let input = prompt(`How many ducks did you give on ${days[i]}?`);
  let count = parseInt(input, 10);

  // Fallback in case of invalid input
  if (isNaN(count)) {
    count = 0;
  }

  duckCounts.push(count);
}

// loop to calculate total
let total = 0;
for (let i = 0; i < duckCounts.length; i++) {
  total += duckCounts[i];
}

// Display message based on total
let message = "";
if (total === 0) {
  message = "Wow! You really don't give a duck!";
} else if (total >= 1 && total <= 3) {
  message = "You really don't give many ducks!";
} else {
  message = "I guess you give a duck.";
}

document.getElementById("messageBox").innerHTML = `Total Ducks Given: ${total} 🦆 <br> ${message}`;

// display array values in list
const list = document.getElementById("ducksList");
for (let i = 0; i < duckCounts.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${days[i]}: ${duckCounts[i]} duck(s)`;
  list.appendChild(li);
}
