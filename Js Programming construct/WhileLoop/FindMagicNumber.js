const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the Magic Number using Binary Search
function findMagicNumber(low, high) {
    if (low > high) {
        console.log("Something went wrong! Please restart.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Your magic number is ${mid}.`);
            rl.close();
        } else {
            rl.question(`Is your number greater than ${mid}? (yes/no): `, (greater) => {
                if (greater.toLowerCase() === "yes") {
                    findMagicNumber(mid + 1, high); // Search in upper half
                } else {
                    findMagicNumber(low, mid - 1); // Search in lower half
                }
            });
        }
    });
}

// Start the game
console.log("Think of a number between 1 and 100.");
console.log("I will try to guess it!");
findMagicNumber(1, 100);
