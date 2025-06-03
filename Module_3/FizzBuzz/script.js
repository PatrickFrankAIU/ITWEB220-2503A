const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  output.textContent = "";
  let i = 1;
  startBtn.disabled = true;

  const interval = setInterval(() => {
    if (i > 50) {
      clearInterval(interval);
      startBtn.disabled = false;
      return;
    }

    if (i % 3 === 0 && i % 5 === 0) {
      output.textContent += "FizzBuzz!\n";
    } else if (i % 3 === 0) {
      output.textContent += "Fizz\n";
    } else if (i % 5 === 0) {
      output.textContent += "Buzz\n";
    } else {
      output.textContent += i + "\n";
    }

    i++;
  }, 300);
});
