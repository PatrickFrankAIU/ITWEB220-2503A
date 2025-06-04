
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Function to find the minimum value in the array
function findMinimum(arr) {
  if (arr.length === 0) return null; //checks if the array is empty

  let min = arr[0]; //Assuming the first element is the minimum
  for (let i = 1; i < arr.length; i++) { // Start from the second element. Skip the first element since it's already considered.
    if (arr[i] < min) { //Is the current element less than the current minimum?
      min = arr[i]; //update the minimum value
    }
  }
  return min; // Return the minimum value found
}

// Display the array
const arrayBox = document.getElementById("arrayBox");
arrayBox.innerHTML = `Array: <span style="color:#004488">${numbers.join(", ")}</span>`;

// Display the result message
const minResult = document.getElementById("minResult");
const minValue = findMinimum(numbers);
minResult.innerHTML = `The minimum number in this array is: <span style="color:#bb0000">${minValue}</span>`;
