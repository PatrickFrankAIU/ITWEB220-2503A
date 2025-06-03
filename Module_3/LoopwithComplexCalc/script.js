const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  output.textContent = ""; // Clear previous output
  let sum = 0;
  let n = 1;

  startBtn.disabled = true;

  const interval = setInterval(() => {
    if (n <= 9) {
      const product = n * (n + 1);
      sum += product;

      output.textContent += `${n} x ${n + 1} = ${product}\n`;
      n++;
    } else {
      clearInterval(interval);
      output.textContent += `\nTotal Sum = ${sum}`;
      startBtn.disabled = false;
    }
  }, 400);
});
