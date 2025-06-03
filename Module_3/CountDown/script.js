let count = 10;
const countdownDisplay = document.getElementById("countdown");
const rocket = document.getElementById("rocket");
const launchBtn = document.getElementById("launchBtn");
const relaunchBtn = document.getElementById("relaunchBtn");
let intervalId;

function startCountdown() {
  launchBtn.disabled = true;
  relaunchBtn.style.display = "none";
  count = 10;
  rocket.classList.remove("launching");
  rocket.style.bottom = "0";

  countdownDisplay.textContent = `Launch in ${count} seconds...`;

  intervalId = setInterval(() => {
    count--;

    if (count > 0) {
      countdownDisplay.textContent = `Launch in ${count} seconds...`;
      console.log(`Launch in ${count} seconds...`);
    } else {
      clearInterval(intervalId);
      countdownDisplay.textContent = "Lift-off!";
      rocket.classList.add("launching");

      // Show the relaunch button after rocket is off screen
      setTimeout(() => {
        relaunchBtn.style.display = "inline-block";
        launchBtn.disabled = false;
      }, 3000);
    }
  }, 1000);
}

function resetLaunch() {
  countdownDisplay.textContent = "Press LAUNCH to initiate";
  rocket.classList.remove("launching");
  rocket.style.bottom = "0";
  relaunchBtn.style.display = "none";
}

launchBtn.addEventListener("click", startCountdown);
relaunchBtn.addEventListener("click", resetLaunch);
