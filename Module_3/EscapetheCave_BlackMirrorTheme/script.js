function startAdventure() {
  alert(">>> Cognitive reboot initiated.");
  alert("You awaken in a dark, featureless cave. No memory. No interface. Just instinct.");

  let firstChoice = prompt("There are two tunnels: one to the 'left', and one to the 'right'. Which do you take? or do 'nothing'?").toLowerCase();
  let inventory = "";

  if (firstChoice === "left") {
    let lakeChoice = prompt("You stumble upon a still, black lake reflecting nothing. Do you 'swim' across or 'walk' around, 'stay' or 'sit'?").toLowerCase();

    if (lakeChoice === "swim") {
      alert("The cold bites into you. In the center, your hand strikes something metallic — a sealed pod with pulsing light.");
      inventory = "a strange device from the lake";
    } else if (lakeChoice === "walk") {
      alert("You walk for what feels like hours until you find a cold, abandoned camp. Inside: old tech, dried food, and a dim light source.");
      inventory = "supplies and a weak lantern";
    } else {
      alert("You hesitate. The lake doesn't. Something pulls you under.");
      inventory = "nothing";
    }

  } else if (firstChoice === "right") {
    let tunnelChoice = prompt("The path leads to a collapsed tunnel. You can either 'explore' the side-tunnel or 'continue' forward.").toLowerCase();

    if (tunnelChoice === "explore") {
      alert("Inside the narrow tunnel, your foot hits metal. A terminal flickers on. It displays a crude map of the cave and blinking escape routes.");
      inventory = "a partial map";
    } else if (tunnelChoice === "continue") {
      alert("Further along, a figure emerges: an old man with glass eyes. He doesn't speak. He simply points left, then fades.");
      inventory = "cryptic guidance from a hermit";
    } else {
      alert("You stand still. The darkness gets bored before you do.");
      inventory = "nothing";
    }

  } else {
    alert("You sit between the paths. Eventually, you forget what choices are.");
    inventory = "stagnation";
  }

  // Conclusion
  alert(">>> Processing navigation data...");
  if (inventory === "a strange device from the lake") {
    alert("You reach the exit. A biometric scanner flickers. The device vibrates, syncing. The door opens. You're free... for now.");
  } else if (inventory === "supplies and a weak lantern") {
    alert("The cave narrows. Your lantern pulses erratically. You crawl, scrape, emerge into fog. The surface... or another layer?");
  } else if (inventory === "a partial map") {
    alert("Using the map, you bypass dead ends. The final wall isn't solid — it's code. You walk through.");
  } else if (inventory === "cryptic guidance from a hermit") {
    alert("You trust the silent signal. After hours, you see light. A doorway. It reacts to your presence.");
  } else if (inventory === "nothing") {
    alert("No tools. No clues. But you keep going. Eventually, you find another traveler... just as lost.");
  } else if (inventory === "stagnation") {
    alert("The cave became your home. Not because you loved it. But because you stopped looking.");
  }

  alert(">>> Simulation Ended.\nSummary: You exited with " + inventory + ".\nYour choices have been logged.");
}

// Trigger glitch effect every 6 seconds
setInterval(() => {
  const glitch = document.querySelector('.glitch-overlay');
  glitch.style.animation = 'none';
  void glitch.offsetWidth;
  glitch.style.animation = 'glitchFlash 0.7s ease-in-out';
}, 2000);
