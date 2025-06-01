function checkDay() {
  const input = document.getElementById("dayInput").value;
  const dayNumber = parseInt(input);
  const resultOutput = document.getElementById("resultOutput");

  let dayName = "";
  let daysUntilWeekend = null;

  switch (dayNumber) {
    case 1:
      dayName = "a case of the Mondays...\u{1F612}";
      daysUntilWeekend = 5;
      break;
    case 2:
      dayName = "taco Tuesday \u{1F32E}!";
      daysUntilWeekend = 4;
      break;
    case 3:
      dayName = "Wednesday...hump day...\u{1F42B}";
      daysUntilWeekend = 3;
      break;
    case 4:
      dayName = "thirsty Thursday \u{1F37A}!";
      daysUntilWeekend = 2;
      break;
    case 5:
      dayName = "Friday \u{1F973}!";
      daysUntilWeekend = 1;
      break;
    case 6:
      dayName = "Saturday";
      daysUntilWeekend = 0;
      break;
    case 7:
      dayName = "Sunday fun-day \u{1F60E}";
      daysUntilWeekend = 0;
      break;
    default:
      resultOutput.textContent = "Invalid Day";
      return;
  }

  let message = `That day is ${dayName}.`;

  // Stretch goal: IF/ELSE for how many days until weekend
if (daysUntilWeekend > 0) {
  message += `<br>There are ${daysUntilWeekend} day(s) until the weekend.`;
} else if (dayName === "Sunday fun-day \u{1F60E}") {
  message += `<br>The weekend is almost over...\u{1F612}`;
} else if (daysUntilWeekend === 0) {
  message += `<br>It's the weekend! 🎉`;
}


  resultOutput.innerHTML = message;
}
