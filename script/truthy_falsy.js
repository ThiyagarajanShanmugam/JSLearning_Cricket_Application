function check_availability()
{

const players = {
    "Virat Kohli": true,
    "Rohit Sharma": true,
    "Jasprit Bumrah": true,
    "Rishab Pant": false,
  };
  
    const playerName = document.getElementById("player-name").value;
    const result = document.getElementById("availability-result");
  
    if (players[playerName]) {
      result.textContent = `${playerName} is available for the match!`;
    } else {
      result.textContent = `${playerName} is not available for the match!`;
    }
  }
  