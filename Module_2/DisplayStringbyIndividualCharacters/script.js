function reportCharacters() {
  const input = prompt("Enter a string (e.g., your name):");
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!input || input.length === 0) {
    resultsDiv.innerHTML = "No input provided.";
    return;
  }

  const ordinals = [
    "First", "Second", "Third", "Fourth", "Fifth",
    "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
    "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth",
    "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth"
  ];

  for (let i = 0; i < input.length; i++) {
    const label = ordinals[i] || `${i + 1}th`;
    const char = input.charAt(i);
    resultsDiv.innerHTML += `${label} Character: ${char}<br>`;
  }
}
