function start_tasks()
  {
    const tasksLog = document.getElementById("tasks-log");
    tasksLog.innerHTML = "Starting preparation tasks...<br>";
  
    const fetchPitchReport = () => 
      new Promise((resolve) => setTimeout(() => resolve("Pitch report ready!"), 1000));
    const checkWeather = () => 
      new Promise((resolve) => setTimeout(() => resolve("Weather checked!!"), 2000));
    const finalizePlayingXI = () => 
      new Promise((resolve) => setTimeout(() => resolve("Playing XI finalized!!!"), 1500));
  
    fetchPitchReport()
      .then((result) => {
        tasksLog.innerHTML += `${result}<br>`;
        return checkWeather();
      })
      .then((result) => {
        tasksLog.innerHTML += `${result}<br>`;
        return finalizePlayingXI();
      })
      .then((result) => {
        tasksLog.innerHTML += `${result}<br>`;
        tasksLog.innerHTML += "Match preparation completed!!!!";
      });
  }
  