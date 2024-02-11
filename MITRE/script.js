const techniques = {
  "Reconnaissance": ["Active Scanning", "Port Scanning", "Network Sniffing"],
  "Initial Access": ["Phishing", "Drive-by Compromise", "Exploit Public-Facing Application"],
  "Credential Access": ["Credential Dumping", "Brute Force", "Steal Application Access Token"],
  // Add more techniques and tactics as needed
};

function displayTechnique() {
  const tacticSelect = document.getElementById("tactic-select");
  const tactics = Object.keys(techniques);
  const randomIndex = Math.floor(Math.random() * tactics.length);
  const randomTactic = tactics[randomIndex];
  const technique = techniques[randomTactic];
  const randomTechniqueIndex = Math.floor(Math.random() * technique.length);
  const randomTechnique = technique[randomTechniqueIndex];
  document.getElementById("technique").innerText = "Technique: " + randomTechnique;
  return randomTactic;
}

function checkTactic() {
  const tacticInput = document.getElementById("tactic-input").value.trim().toLowerCase();
  const correctTactic = displayTechnique().toLowerCase();
  const resultElement = document.getElementById("result");
  if (tacticInput === correctTactic) {
    resultElement.innerText = "Correct! You earn 1 point.";
  } else {
    resultElement.innerText = "Incorrect! The correct tactic is: " + correctTactic;
  }
}

function restartGame() {
  document.getElementById("tactic-input").value = "";
  document.getElementById("result").innerText = "";
  displayTechnique();
}
