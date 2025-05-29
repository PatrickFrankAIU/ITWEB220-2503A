function startConversion() {
  const conversionType = prompt("Convert Celsius to Fahrenheit or Fahrenheit to Celsius? (Enter 'C' or 'F')").toUpperCase();
  const resultDiv = document.getElementById("result");

  if (conversionType !== "C" && conversionType !== "F") {
    resultDiv.textContent = "Invalid choice. Please enter 'C' or 'F'.";
    return;
  }

  const input = prompt(`Enter temperature in ${conversionType === "C" ? "Celsius" : "Fahrenheit"}:`);

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultDiv.textContent = "Invalid temperature entered.";
    return;
  }

  if (conversionType === "C") {
    const fahrenheit = (temp * 9/5) + 32;
    resultDiv.textContent = `${temp}°C is ${fahrenheit.toFixed(2)}°F.`;
  } else {
    const celsius = (temp - 32) * 5/9;
    resultDiv.textContent = `${temp}°F is ${celsius.toFixed(2)}°C.`;
  }
}
