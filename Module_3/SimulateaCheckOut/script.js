function calculateSalesTax(price) {
  const taxRate = 0.07;
  return price * taxRate;
}

const cartPrices = [19.99, 45.5, 12.89, 35.0];
const display = document.getElementById('lcdDisplay');

cartPrices.forEach((price) => {
  const tax = calculateSalesTax(price);
  const total = price + tax;

  const output = `Price: $${price.toFixed(2)}, Tax: $${tax.toFixed(2)}, Total: $${total.toFixed(2)}`;
  
  const line = document.createElement('div');
  line.className = 'line';
  line.textContent = output;
  display.appendChild(line);
});
