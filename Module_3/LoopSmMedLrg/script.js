const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  output.textContent = "";
  startBtn.disabled = true;

  let i = 1;

  const interval = setInterval(() => {
    let message = "";

    if (i >= 1 && i <= 5) {
      message = `${i} is Small`;
    } else if (i >= 6 && i <= 10) {
      message = `${i} is Medium`;
    } else if (i >= 11 && i <= 15) {
      message = `${i} is Large`;
    }

    output.textContent += message + "\n";

    i++;

    if (i > 15) {
      clearInterval(interval);
      startBtn.disabled = false;
    }
  }, 300);
});
