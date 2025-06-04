const dailySales = [120, 200, 150, 80, 300, 90, 400];
const salesLog = document.getElementById("salesLog");
const runningTotal = document.getElementById("runningTotal");
const startSales = document.getElementById("startSales");

startSales.addEventListener("click", () => { //Step 1: User clicks the button
  let clickTime = new Date(); //Step 2: Capture the time of the click
  console.log("🟢 Sales button clicked at:", clickTime);

  salesLog.textContent = ""; //Step 3: clear previous sales log
  runningTotal.textContent = "💰 Running Total: $0"; //Step 4 
  startSales.disabled = true; //Step 5: Disable the button to prevent multiple clicks

  let totalSales = 0; //Step 6: Initialize total sales
  let day = 0; //Step 7: Initialize day counter

  const interval = setInterval(() => { //Step 8: Set up an interval to process daily sales
    if (day >= dailySales.length) { //Step 9: Check if all days have been processed
      clearInterval(interval); //Step 20: Clear the interval when all days are processed
      const final = `✅ Final Total Sales for the Week: $${totalSales}`; //Step 21: Prepare the final message
      runningTotal.textContent = final; //Step 22: Display the final total in the running total element
      console.log(final); //Step 23: Log the final total to the console
      startSales.disabled = false; //Step 24: Re-enable the button for future clicks
      return; //Step 25: Exit the function if all days are processed
    }

    const sale = dailySales[day]; //Step 10: Get the sale for the current day
    totalSales += sale; //Step 11: Update the total sales

    const line = `📅 Day ${day + 1}: Sale = $${sale}`; //Step 12
    const p = document.createElement("p"); //Step 13: Create a new paragraph element
    p.textContent = line; //Step 14: Set the text content of the paragraph
    salesLog.appendChild(p); //Step 15: Append the paragraph to the sales log

    runningTotal.textContent = `💰 Running Total: $${totalSales}`; //Step 16
    console.log(line + ` | Running Total: $${totalSales}`); //Step 17: Log the current sale and running total

    day++; //Step 18: Increment the day counter
  }, 500); //step 19 & 26: Set the interval to 500 milliseconds
});
