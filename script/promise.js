function fetchScore() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 100) + 1;
      const success = Math.random() > 0.1; 
      
      if (success) {
        resolve(randomScore);
      } else {
        reject("Failed to fetch the score. Please try again!"); 
      }
    }, 2000); 
  });
}

async function update_score() {
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.textContent = "Score: Loading...";

  try {
    const score = await fetchScore(); 
    scoreDisplay.textContent = `Score: ${score}`;
  } catch (error) {
    scoreDisplay.textContent = error; 
  }
}

