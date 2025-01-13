function start_commentary()
{
    const commentaryDiv = document.getElementById("commentary");
    commentaryDiv.innerHTML = "Starting commentary...";

    setTimeout(() => {
      commentaryDiv.innerHTML += "<p>1. Bowler runs in... delivers!</p>";
    }, 1000);

    setTimeout(() => {
      commentaryDiv.innerHTML += "<p>2. Batsman swings... it's a SIX!</p>";
    }, 2000);

  }
  