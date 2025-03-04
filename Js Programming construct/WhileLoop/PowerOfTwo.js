const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print powers of 2 up to 2^n (stopping at 256)
function printPowersOfTwo(n) {
    let power = 0;
    let value = 1; // 2^0 = 1

    console.log(`Powers of 2 up to 2^${n} (max 256):`);
    
    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        value *= 2; // Multiply by 2 to get the next power
        power++;
    }
}

// Ask for user input
rl.question("Enter a positive integer (n): ", (input) => {
    let num = parseInt(input);

    // Validate input
    if (isNaN(num) || num < 0) {
        console.log("Invalid input! Please enter a non-negative integer.");
    } else {
        printPowersOfTwo(num);
    }

    rl.close(); // Close readline interface
});
