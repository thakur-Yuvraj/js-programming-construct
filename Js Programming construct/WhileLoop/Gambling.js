const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gamblerGame() {
    let money = 100;
    let bets = 0;
    let wins = 0;
    const goal = 200;

    console.log("\nStarting the Gambler Game...\n");
    console.log("You start with Rs. 100 and bet Rs. 1 per round.");
    console.log("You win if you reach Rs. 200 or lose if you reach Rs. 0.\n");

    while (money > 0 && money < goal) {
        bets++;
        let gamble = Math.random() < 0.5; // 50% chance to win or lose

        if (gamble) {
            money++; // Win Rs. 1
            wins++;
        } else {
            money--; // Lose Rs. 1
        }

        console.log(`Bet ${bets}: ${gamble ? "Win" : "Lose"} (Money: Rs. ${money})`);
    }

    console.log("\nGame Over!");
    console.log(money === goal ? "You won Rs. 200!" : "You went broke!");
    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    
    rl.close();
}

// Start the game
gamblerGame();
