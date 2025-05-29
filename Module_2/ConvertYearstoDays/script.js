function calculateAgeInDays() {
  // Ask for age in years
  let ageInYears = prompt("Please enter your age in years:");

  // Convert and calculate
  let ageInDays = parseFloat(ageInYears) * 365;

  // Output to console
  console.log("You are approximately " + ageInDays + " days old.");
}
// comment from pat