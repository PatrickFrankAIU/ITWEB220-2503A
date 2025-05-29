const lights = {
  red: document.getElementById('red'),
  yellow: document.getElementById('yellow'),
  green: document.getElementById('green')
};

const messageBox = document.getElementById('driverMessage');
const body = document.querySelector('.advisory-box');

const trafficStates = ["red", "yellow", "green", "blinking", "none", "karen", "KillerRabbitofCaerbannog"];
const timeStates = ["day", "night"];

let blinkInterval = null;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clearLights() {
  for (const key in lights) {
    lights[key].classList.remove('glow');
    lights[key].style.backgroundColor = 'grey';
    lights[key].innerHTML = ''; // Clear image if used
  }
}

function setGlow(color) {
  clearLights();

  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }

  if (color === "blinking") {
    let visible = false;
    blinkInterval = setInterval(() => {
      visible = !visible;
      for (const key in lights) {
        lights[key].style.backgroundColor = visible ? key : 'grey';
        lights[key].classList.toggle("glow", visible);
      }
    }, 500);
  } else if (color === "karen") {
    for (const key in lights) {
      lights[key].innerHTML = `<img src="Karen-modified.png" alt="Karen">`;
    }
  } else if (color === "KillerRabbitofCaerbannog") {
    for (const key in lights) {
      lights[key].innerHTML = `<img src="KillerRabbitofCaerbannog-modified.png" alt="KillerRabbitofCaerbannog">`;
    }
  } else if (color === "none") {
    // Do nothing (all lights stay off)
  } else {
    for (const key in lights) {
      lights[key].innerHTML = '';
    }
    lights[color].classList.add('glow');
    lights[color].style.backgroundColor = color;
  }
}

function updateScene() {
  const trafficLight = getRandom(trafficStates);
  const timeOfDay = getRandom(timeStates);

  body.classList.remove("day", "night");
  body.classList.add(timeOfDay);

  setGlow(trafficLight);

  let message = "";
  switch (trafficLight) {
    case "green":
      message = "Go";
      break;
    case "yellow":
      message = "Slow down";
      break;
    case "red":
      message = "Stop";
      break;
    case "blinking":
      message = timeOfDay === "day"
        ? "Proceed with caution"
        : "Stop, then proceed with caution";
      break;
    case "none":
      message = timeOfDay === "day"
        ? "Stop, then proceed when safe"
        : "Use the light as a stop sign";
      break;
    case "karen":
      message = "Reverse!";
      break;
    case "KillerRabbitofCaerbannog":
      messageBox.innerHTML = `<img src="runaway.png" alt="Run away!" style="max-width: 100%; max-height: 100%; border-radius: 8px;">`;
      return;
    default:
      message = "Unknown signal";
  }

  messageBox.textContent = message;
}

updateScene();
setInterval(updateScene, 5000);
