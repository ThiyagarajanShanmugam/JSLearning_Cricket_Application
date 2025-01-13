// Player stats object
const playerStats = {
  runs: 0,
  wickets: 0,
};

// Proxy handler
const handler = {
  // Trap for setting a property
  set(target, property, value) {
    if (property === "runs" && value < target[property]) {
      console.log("Runs cannot decrease!");
      return false;
    }
    if (property === "wickets" && value < target[property]) {
      console.log("Wickets cannot decrease!");
      return false;
    }
    console.log(`Updating ${property} to ${value}`);
    return Reflect.set(target, property, value); // Default behavior
  },
  
  // Trap for getting a property
  get(target, property) {
    console.log(`Accessing ${property}: ${target[property]}`);
    return Reflect.get(target, property); // Default behavior
  }
};

// Create a Proxy for playerStats
const proxyStats = new Proxy(playerStats, handler);

// Cache DOM elements
const playerLog = document.getElementById("player-log");
const runBtn = document.getElementById("run-btn");
const wicketBtn = document.getElementById("wicket-btn");

// Update player stats and UI
function updateLog() {
  playerLog.textContent = `Runs: ${proxyStats.runs} | Wickets: ${proxyStats.wickets}`;
}

// Event listeners for buttons
runBtn.addEventListener("click", () => {
  proxyStats.runs += 1; // Increment runs
  updateLog();
});

wicketBtn.addEventListener("click", () => {
  proxyStats.wickets += 1; // Increment wickets
  updateLog();
});

// const playerData = {
//     name: "Virat Kohli",
//     age: 34,
//   };
  
//   const proxyPlayer = new Proxy(playerData, {
//     get(target, prop) {
//       console.log(`Accessed property: ${prop}`);
//       return Reflect.get(target, prop);
//     },
//     set(target, prop, value) {
//       if (prop === "age" && typeof value !== "number") {
//         throw new Error("Age must be a number!");
//       }
//       return Reflect.set(target, prop, value);
//     },
//   });
  
//   const log = document.getElementById("player-log");
//   try {
//     log.textContent += `Name: ${proxyPlayer.name}\n`;
//     proxyPlayer.age = 35;
//     log.textContent += `Updated Age: ${proxyPlayer.age}\n`;
//     proxyPlayer.age = "Invalid Age"; // This will throw an error
//   } catch (error) {
//     log.textContent += `Error: ${error.message}`;
//   }
  
// Player stats object
// const playerStats = {
//   name: "Rohit Sharma",
//   role: "Batsman",
//   runs: 0,
//   wickets: 0,
// };

// // Proxy handler
// const statsHandler = {
//   get(target, prop) {
//     console.log(`Accessing property '${prop}': ${target[prop]}`);
//     return Reflect.get(target, prop);
//   },
//   set(target, prop, value) {
//     if (prop === "runs" || prop === "wickets") {
//       if (value < 0) {
//         console.error(`Invalid value for '${prop}': ${value}. It cannot be negative.`);
//         return false;
//       }
//     }
//     console.log(`Updating '${prop}' to ${value}`);
//     return Reflect.set(target, prop, value);
//   },
// };

// // Create proxy
// const proxyPlayerStats = new Proxy(playerStats, statsHandler);

// // Button click simulation
// document.getElementById("simulate-proxy-reflect").addEventListener("click", () => {
//   const output = document.getElementById("proxy-reflect-output");

//   // Access properties
//   output.textContent = `Player: ${proxyPlayerStats.name}\nRole: ${proxyPlayerStats.role}\n`;

//   // Update stats with valid values
//   proxyPlayerStats.runs += 50;
//   proxyPlayerStats.wickets += 2;
//   output.textContent += `Updated Stats:\nRuns: ${proxyPlayerStats.runs}\nWickets: ${proxyPlayerStats.wickets}\n`;

//   // Attempt invalid update
//   proxyPlayerStats.runs = -10; // Invalid value
//   output.textContent += `\nAfter Invalid Update:\nRuns: ${proxyPlayerStats.runs}`;
// });
