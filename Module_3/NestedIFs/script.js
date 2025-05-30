function evaluateKaren() {
  const karenVisits = parseInt(document.getElementById("karenVisits").value);
  const loyaltyPoints = parseInt(document.getElementById("loyaltyPoints").value);
  const purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);

  let output = "";

  // Karen Reward Evaluation
  if (karenVisits === 1) {
    output += "🟢 You get the HIGHEST Karen reward!\n";
  } else if (karenVisits === 2) {
    output += "🟡 You get the middle-tier Karen reward.\n";
  } else if (karenVisits === 3) {
    output += "🟠 You get the lowest Karen reward.\n";
  } else if (karenVisits > 3) {
    output += "🔴 You will receive a... *special* reward by mail. 😳\n";
      document.getElementById("result").textContent = output;
  return;
  } else {
    output += "✅ No Karen behavior detected. You're a model customer!\n";
  }

  output += "\n";

  // Loyalty Offer Evaluation
  if (loyaltyPoints > 50) {
    output += "✅ You qualify for a special offer.\n";

    if (loyaltyPoints > 100) {
      output += "🎉 You qualify for our standard loyalty offer!\n";

      if (loyaltyPoints > 150 && purchaseAmount > 200) {
        output += "🌟 You also qualify for our PREMIUM purchase bonus!\n";
      }
    }
  } else {
    output += "❌ You need more than 50 loyalty points to get any offers.\n";
  }

  document.getElementById("result").textContent = output;
}
