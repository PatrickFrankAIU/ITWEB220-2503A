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

    if (i % 5 === 0) {
      output.textContent += i + "\n";
    }

    i++;
  }, 300);
});

