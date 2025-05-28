function calculateTotal() {
  // Prompt for prices
  let price1 = parseFloat(prompt("Enter the price of item 1:"));
	// Prompt for quantities
  let qty1 = parseInt(prompt("Enter the quantity of item 1:"));

	// Prompt for prices
  let price2 = parseFloat(prompt("Enter the price of item 2:"));
	// Prompt for quantities
	let qty2 = parseInt(prompt("Enter the quantity of item 2:"));

	// Prompt for prices
	let price3 = parseFloat(prompt("Enter the price of item 3:"));
  // Prompt for quantities
  let qty3 = parseInt(prompt("Enter the quantity of item 3:"));

  // Calculate totals per item
  let total1 = price1 * qty1;
  let total2 = price2 * qty2;
  let total3 = price3 * qty3;

  // Calculate grand total
  let grandTotal = total1 + total2 + total3;

  // Calculate tax
  let taxRate = 5;
  let taxAmount = (taxRate / 100) * grandTotal;
  let totalWithTax = grandTotal + taxAmount;

  // Display results on the page
  const resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = `
	<strong>Item Totals:</strong><br>
	${qty1} × $${price1.toFixed(2)} = $${total1.toFixed(2)}<br>
	${qty2} × $${price2.toFixed(2)} = $${total2.toFixed(2)}<br>
	${qty3} × $${price3.toFixed(2)} = $${total3.toFixed(2)}<br><br>

	<strong>Grand Total:</strong> $${grandTotal.toFixed(2)}<br>
	<strong>Sales Tax (5%):</strong> $${taxAmount.toFixed(2)}<br>
	<strong>Total with Tax:</strong> $${totalWithTax.toFixed(2)}
	`;
}
