let score = 0;

function add(){
  score += 4;
  document.getElementById("score").textContent = `Score: ${score}`;
}

function reset() {
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
};
