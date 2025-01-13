function Player(name, role) {
  this.name = name;
  this.role = role;
}

Player.prototype.bat = function() {
  return `${this.name} hits a magnificent six!`;
};

Player.prototype.bowl = function() {
  return `${this.name} delivers a perfect yorker!`;
};

const dhoni = new Player("MS Dhoni", "Batsman");
const bumrah = new Player("Jasprit Bumrah", "Bowler");

function playerActions() {
  const players = [dhoni, bumrah];
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  const action = randomPlayer.role === "Batsman" ? randomPlayer.bat() : randomPlayer.bowl();
  document.getElementById("action-log").textContent = action;
}
