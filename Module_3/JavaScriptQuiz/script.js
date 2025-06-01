function startQuiz() {
  alert("Welcome to the JavaScript Basics Quiz!");

  // Question 1
  let q1 = prompt("Question 1:\nWhich is the correct way to declare a function in JavaScript?\nA) function = myFunction() {}\nB) function myFunction() {}").toUpperCase();

  if (q1 === "B") {
    alert("✅ Correct! Great start!");

    // Question 2
    let q2 = prompt("Question 2:\nWhat type of value is NaN in JavaScript?\nA) Number\nB) String").toUpperCase();

    if (q2 === "A") {
      alert("✅ Correct! NaN stands for 'Not-a-Number' but it is still of type Number.");

      // Question 3
      let q3 = prompt("Question 3:\nWhat does the === operator do in JavaScript?\nA) Compares value and type\nB) Compares only value").toUpperCase();

      if (q3 === "A") {
        alert("✅ Correct! === checks both value and type.");
        alert("🎉 You've completed the quiz! Excellent job.");
      } else {
        alert("❌ Incorrect. === checks both value and type — it's stricter than ==.");
      }

    } else {
      alert("❌ Incorrect. NaN is actually of type Number in JavaScript.");
    }

  } else {
    alert("❌ Incorrect. The correct way to declare a function is: function myFunction() {}");
  }

  alert("Thanks for taking the quiz. Keep practicing JavaScript — you're on the right path! 💻");
}
