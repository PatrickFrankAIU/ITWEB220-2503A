let numbers = [23, 5, 89, 16, 7];

// Sort ascending (low to high)
let ascending = [...numbers].sort((a, b) => a - b);// Create a copy of the array and sort it in ascending order

// Sort descending (high to low)
let descending = [...numbers].sort((a, b) => b - a);// Create a copy of the array and sort it in descending order

// Build output for ascending
let ascOutput = "Ascending: ";
for (let i = 0; i < ascending.length; i++) { // Use a loop to format the output 
  ascOutput += ascending[i]; // Add each number to the output string
  if (i < ascending.length - 1) ascOutput += ", "; // if not the last number, add a comma
}

// Build output for descending
let descOutput = "Descending: ";
for (let i = 0; i < descending.length; i++) {
  descOutput += descending[i];
  if (i < descending.length - 1) descOutput += ", ";
}

// Display both in the container
document.getElementById("output").innerHTML = `
  <strong>${ascOutput}</strong><br>
  <strong>${descOutput}</strong>
`;
