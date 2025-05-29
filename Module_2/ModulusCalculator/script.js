function calculateRemainder() {
  const num1 = prompt("Enter the dividend:");
  const num2 = prompt("Enter the second divisor:");

  const a = parseFloat(num1);
  const b = parseFloat(num2);
  const resultDiv = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Please enter valid numeric values.";
    return;
  }

  if (b === 0) {
    resultDiv.textContent = "Division by zero is not allowed.";
    return;
  }

  const remainder = a % b;
  resultDiv.textContent = `The remainder of ${a} ÷ ${b} is ${remainder}.`;
}
