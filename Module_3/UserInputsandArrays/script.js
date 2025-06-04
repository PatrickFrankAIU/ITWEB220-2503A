let output = document.getElementById("output");

// Ask user: number or string mode
let mode = prompt("Type 'number' to enter numeric values or 'string' to enter words.").toLowerCase();// Validate input
let array = [];// Initialize array to hold values
let count = parseInt(prompt(`How many ${mode}s will you enter?`));// Validate count input

if (isNaN(count) || count <= 0) {// Check if count is a valid number
  output.textContent = "Invalid count. Please refresh and try again.";
} else {
  // Collect input values in array
  for (let i = 0; i < count; i++) { // Loop to get user inputs 
    let value = prompt(`Enter ${mode} #${i + 1}:`); // Validate input
    if (mode === "number") { // If mode is number, convert input to float
      array.push(parseFloat(value));// Validate numeric input
    } else {
      array.push(value.trim());// For strings, trim whitespace
    }
  }

  // Sort based on type
  if (mode === "number") {// If mode is number, sort numerically
    array.sort((a, b) => a - b); // Numeric ascending
  } else {
    array.sort(); // Default alphabetic for strings
  }

  // Display result using for...of loop
  let result = `<strong>Sorted ${mode}s:</strong><br><ul>`;
  for (let item of array) {
    result += `<li>${item}</li>`;
  }
  result += "</ul>";

  output.innerHTML = result;// Display the sorted array in the output element
}
