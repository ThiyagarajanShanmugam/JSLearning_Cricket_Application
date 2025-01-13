let score = 0; 
function score_update() {
  const scoreUpdateEvent = new Event("scoreUpdated");

  score += 6;
  document.dispatchEvent(scoreUpdateEvent); 
}
document.addEventListener("scoreUpdated", () => {
  document.getElementById("score-display").textContent = `Score: ${score}`;
});
