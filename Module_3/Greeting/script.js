const names = ["Alice", "Bob", "Charlie", "Dana", "Elliot"];
const greetingArea = document.getElementById("greetingArea");
const greetBtn = document.getElementById("greetBtn");

// === Option A: Anonymous Function with setInterval ===
greetBtn.addEventListener("click", function () {
  console.log("👆 Greet button clicked.");

  // Clear old greetings
  greetingArea.textContent = "";
  greetBtn.disabled = true;

  let i = 0;

  const interval = setInterval(function () {
    if (i >= names.length) {
      clearInterval(interval);
      console.log("✅ All greetings displayed.");
      greetBtn.disabled = false;

      const finalMessage = document.createElement("p");
      finalMessage.textContent = "Now get to work!";
      finalMessage.style.fontWeight = "bold";
      finalMessage.style.marginTop = "15px";
      greetingArea.appendChild(finalMessage);

      return;
    }

    const name = names[i];
    const message = "Hello, " + name + "!";
    const p = document.createElement("p");
    p.textContent = message;
    greetingArea.appendChild(p);

    console.log("👋 Greeting shown:", message);

    i++;
  }, 500); // delay between greetings
});


// === Option B: Arrow Function version  ===
/*
greetBtn.addEventListener("click", () => {
  console.log("👆 Greet button clicked (arrow function).");

  greetingArea.textContent = "";
  greetBtn.disabled = true;

  let i = 0;

  const interval = setInterval(() => {
    if (i >= names.length) {
      clearInterval(interval);
      console.log("✅ All greetings displayed.");
      greetBtn.disabled = false;
      return;
    }

    const name = names[i];
    const message = `Hello, ${name}! Welcome!`;
    const p = document.createElement("p");
    p.textContent = message;
    greetingArea.appendChild(p);

    console.log("👋 Greeting shown:", message);

    i++;
  }, 500);
});
*/
