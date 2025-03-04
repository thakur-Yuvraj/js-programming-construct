const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// simulation of coinflip
// Ask user to flip the coin
rl.question("Press Enter to flip the coin...", () => {
    // Generate a random number (0 or 1)
    let coinFlip = Math.floor(Math.random() * 2);
    
    // Determine the result
    let result = (coinFlip === 0) ? "Heads" : "Tails";
    
    console.log(`The coin landed on: ${result}`);

    // Close readline interface
    rl.close();
});
