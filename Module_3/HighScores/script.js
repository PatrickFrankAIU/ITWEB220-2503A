/* const scores = [15, 22, 18, 34, 45, 5, 10, 25];
const highScoreThreshold = 20;

const chalkboard = document.getElementById("chalkboard");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  chalkboard.textContent = "";
  startBtn.disabled = true;

  let i = 0;
  let totalScores = 0;
  let highScores = 0;
  let lowScores = 0;
  let sumAll = 0;
  let sumHigh = 0;
  let highest = scores[0];
  let highList = [];

  const interval = setInterval(() => {
    if (i >= scores.length) {
      clearInterval(interval);
      let avg = (sumAll / totalScores).toFixed(2);
      let highAvg = highScores > 0 ? (sumHigh / highScores).toFixed(2) : 0;

      chalkboard.textContent += `\nSummary:\n`;
      chalkboard.textContent += `🧮 Total Scores: ${totalScores}\n`;
      chalkboard.textContent += `📊 High Scores: ${highScores}\n`;
      chalkboard.textContent += `📉 Low Scores: ${lowScores}\n`;
      chalkboard.textContent += `📈 Highest Score: ${highest}\n`;
      chalkboard.textContent += `🧠 Average: ${avg}\n`;
      chalkboard.textContent += `🌟 Avg High Scores: ${highAvg}\n`;
      chalkboard.textContent += `🏅 High Scores: ${highList.join(", ")}\n`;

      startBtn.disabled = false;
      return;
    }

    let score = scores[i];
    totalScores++;
    sumAll += score;

    let category = "";
    if (score > highScoreThreshold) {
      highScores++;
      sumHigh += score;
      highList.push(score);
      category = "🔥 High Score!";
    } else {
      lowScores++;
      category = "Low Score";
    }

    if (score > highest) highest = score;

    chalkboard.textContent += `Score ${i + 1}: ${score} → ${category}\n`;
    i++;
  }, 400);
});
 */

const scores = [15, 22, 18, 34, 45, 5, 10, 25];
console.log("📦 Initial Scores:", scores);

const highScoreThreshold = 20;
console.log("🚧 High Score Threshold set to:", highScoreThreshold);

const chalkboard = document.getElementById("chalkboard");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  console.log("🟢 Button clicked. Starting evaluation...");

  chalkboard.textContent = "";
  startBtn.disabled = true;

  let i = 0;
  let totalScores = 0;
  let highScores = 0;
  let lowScores = 0;
  let sumAll = 0;
  let sumHigh = 0;
  let highest = scores[0];
  let highList = [];

  console.log("🔁 Beginning interval loop...");

  const interval = setInterval(() => {
    if (i >= scores.length) { //Step 1 & Step 13 (reaching the end of the scores array)
      console.log("✅ All scores processed. Ending interval.");
      clearInterval(interval);

      let avg = (sumAll / totalScores).toFixed(2); //Step 14
      let highAvg = highScores > 0 ? (sumHigh / highScores).toFixed(2) : 0; //Step 15

      console.log("🧠 Calculating final summary:"); 
      console.log("🧮 Total Scores:", totalScores); 
      console.log("📊 High Scores:", highScores); 
      console.log("📉 Low Scores:", lowScores); 
      console.log("📈 Highest Score:", highest); 
      console.log("🧠 Average Score:", avg); 
      console.log("🌟 Average High Score:", highAvg); 
      console.log("🏅 High Score List:", highList); 

      chalkboard.textContent += `\nSummary:\n`; //Step 16
      chalkboard.textContent += `🧮 Total Scores: ${totalScores}\n`; //Step 17
      chalkboard.textContent += `📊 High Scores: ${highScores}\n`; //Step 18
      chalkboard.textContent += `📉 Low Scores: ${lowScores}\n`; //Step 19
      chalkboard.textContent += `📈 Highest Score: ${highest}\n`; //Step 20
      chalkboard.textContent += `🧠 Average: ${avg}\n`; //Step 21
      chalkboard.textContent += `🌟 Avg High Scores: ${highAvg}\n`; //Step 22
      chalkboard.textContent += `🏅 High Scores: ${highList.join(", ")}\n`; //Step 23

      startBtn.disabled = false; //Step 24
      console.log("🔄 Button re-enabled."); //Step 25
      return; //Step 26
    }

    let score = scores[i]; //Step 2
    console.log(`🔢 Score ${i + 1} is: ${score}`);

    totalScores++; //Step 3
    sumAll += score; //Step 4

    let category = ""; //Step 5
    if (score > highScoreThreshold) { //Step 6
      highScores++; //Step 7 (depending on the score)
      sumHigh += score;
      highList.push(score);
      category = "🔥 High Score!"; //Step 8 (depending on the score)
      console.log(`🔥 High score detected: ${score}`);
    } else {
      lowScores++; //Step 7 (depending on the score)
      category = "Low Score"; //Step 8 (depending on the score)
      console.log(`📉 Low score detected: ${score}`);
    }

    if (score > highest) { //Step 9
      console.log(`📈 New highest score found: ${score} (was ${highest})`);
      highest = score;
    }

    chalkboard.textContent += `Score ${i + 1}: ${score} → ${category}\n`; //Step 10
    i++; //Step 11
  }, 400); //Step 12 & Step 27 (Print summary and re-enable button)
});
