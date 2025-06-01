function startQuiz() {
  alert(">>> REFLECTION PROTOCOL ENGAGED");
  alert("System is assessing behavioral efficiency metrics...");

  let response1 = prompt("When confronted with silence, do you experience: 'peace' or 'dread'?").toLowerCase();

  if (response1 === "peace") {
    let control = prompt("Would you rather 'predict' others or be 'unreadable'?").toLowerCase();

    if (control === "predict") {
      let loyalty = prompt("Is loyalty a 'tool' or a 'truth'?").toLowerCase();

      if (loyalty === "tool") {
        alert("› Profile match: 🐍 Snake\nYou weaponize understanding. You mimic trust. You adapt to maintain power.");
      } else if (loyalty === "truth") {
        alert("› Profile match: 🐺 Wolf\nYou follow order and protect structure, even in decay.");
      } else {
        alert("› Anomaly detected. Subject believes in undefined loyalty structure.");
      }

    } else if (control === "unreadable") {
      let memory = prompt("Do you fear 'forgetting' or 'being forgotten'?").toLowerCase();

      if (memory === "forgetting") {
        alert("› Profile match: 🐘 Elephant\nYou preserve. You remember. You cannot move on.");
      } else if (memory === "being forgotten") {
        alert("› Profile match: 🦉 Owl\nYou observe from the edges. You collect, but remain unseen.");
      } else {
        alert("› Subject declines binary memory framework.");
      }

    } else {
      alert("› Input unclear. System assumes self-concealment instinct.");
    }

  } else if (response1 === "dread") {
    let coping = prompt("Do you 'numb' or 'investigate' discomfort?").toLowerCase();

    if (coping === "numb") {
      let escape = prompt("Do you escape into 'routine' or 'distraction'?").toLowerCase();

      if (escape === "routine") {
        alert("› Profile match: 🐛 Larva\nYou repeat. You delay transformation. You exist within pattern.");
      } else if (escape === "distraction") {
        alert("› Profile match: 🐦‍⬛ Raven\nYou curate illusions. You fly above, never landing long.");
      } else {
        alert("› Subject profile incomplete. Interpretation pending.");
      }

    } else if (coping === "investigate") {
      let confrontation = prompt("Does truth 'liberate' or 'damage'?").toLowerCase();

      if (confrontation === "liberate") {
        alert("› Profile match: 🐐 Goat\nYou climb through truth. There is no summit, but you continue.");
      } else if (confrontation === "damage") {
        alert("› Profile match: 🐙 Octopus\nYou bend. You hide. You survive through shape-shifting identity.");
      } else {
        alert("› Truth acknowledged but not categorized. Subject classified as undefined echo.");
      }

    } else {
      alert("› No coping model detected. Risk index increased.");
    }

  } else {
    alert("› Subject failed to engage. Mirror returned no reflection.");
  }

  alert(">>> SESSION COMPLETE\nYour behavioral archetype has been logged.\nGoodbye.");
}

// Animate mirror flash every 5 seconds
setInterval(() => {
  const flash = document.querySelector('.mirror-flash');
  flash.style.animation = 'none'; // Reset
  void flash.offsetWidth;         // Trigger reflow
  flash.style.animation = 'flashSweep 1.2s ease-out';
}, 5000);
