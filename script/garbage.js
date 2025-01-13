let players = {};
function simulate_gc()
{
  const output = document.getElementById("gc-output");

  players["player1"] = { name: "Virat Kohli", role: "Batsman" };
  players["player2"] = { name: "Jasprit Bumrah", role: "Bowler" };
  output.textContent = `Players created: ${JSON.stringify(players, null, 1)}`;

  setTimeout(() => {
    delete players["player1"];
    output.textContent += `\n\nAfter GC simulation: ${JSON.stringify(players,null, 1)}`;
    output.textContent += "\nNow you would have understood Virat's player data is removed from T20I stats \nsince he had officially retired from that format";
    }, 2000);
    const write = document.getElementById("let-var-output");
}
