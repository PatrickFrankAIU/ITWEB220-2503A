let names = ["James", "Janice", "Andrew", "Andrea", "Zachary"];

// Sort alphabetically
names.sort(); // This sorts the array in place

// Build output using a loop (stretch goal)
let result = "Sorted names: "; // Initialize result string
for (let i = 0; i < names.length; i++) { // Loop through each name. Let i = 0 to start from the first element. i < names.length to ensure we don't go out of bounds.
  result += names[i];// Append the current name to the result string
  if (i < names.length - 1) { // If this is not the last name, add a comma and space
    result += ", ";// Append a comma and space after each name except the last one
  }
}

// Display in container
document.getElementById("output").textContent = result;// Set the text content of the output element to the result string
