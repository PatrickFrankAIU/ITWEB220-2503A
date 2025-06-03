const stepSpan = document.getElementById("step");
const calcSpan = document.getElementById("calculation");
const productSpan = document.getElementById("product");
const startBtn = document.getElementById("startBtn");
const stepBtn = document.getElementById("stepBtn");

let product = 1;
let i = 26;
let isRunning = false;
let intervalId = null;

function updateDisplay() {
  let previous = product;
  product *= i;

  stepSpan.textContent = (i - 25) + " of 49";
  calcSpan.textContent = `${previous} x ${i} = ${product}`;
  productSpan.textContent = product.toExponential(12);

  i++;

  if (i >= 75) {
    stepSpan.textContent = "✅ Complete";
    calcSpan.textContent = "—";
    productSpan.textContent = product.toExponential(17);

    if (isRunning) {
      clearInterval(intervalId);
      startBtn.disabled = false;
      stepBtn.disabled = false;
    }
    isRunning = false;
  }
}

function resetState() {
  product = 1;
  i = 26;
  stepSpan.textContent = "—";
  calcSpan.textContent = "—";
  productSpan.textContent = "—";
}

startBtn.addEventListener("click", () => {
  resetState();
  isRunning = true;
  startBtn.disabled = true;
  stepBtn.disabled = true;

  intervalId = setInterval(() => {
    if (i < 75) {
      updateDisplay();
    }
  }, 500);
});

stepBtn.addEventListener("click", () => {
  if (i === 26 || i >= 75) {
    resetState();
  }
  if (i < 75) {
    updateDisplay();
  }
});
