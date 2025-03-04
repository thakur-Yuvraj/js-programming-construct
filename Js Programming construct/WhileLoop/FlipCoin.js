const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to simulate the coin flip game until either Heads or Tails wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;

    console.log("Flipping the coin until either Heads or Tails wins 11 times...\n");

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails"; // Random coin flip

        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        console.log(`Result: ${flip} (Heads: ${headsCount}, Tails: ${tailsCount})`);
    }

    console.log(`\nGame Over! ${headsCount === 11 ? "Heads" : "Tails"} won 11 times.`);
    rl.close();
}

// Start the game
flipCoinGame();
