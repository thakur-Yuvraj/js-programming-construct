const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for user input
rl.question("Enter a positive integer (n): ", (input) => {
    let n = parseInt(input);

    // Validate input
    if (isNaN(n) || n <= 0) {
        console.log("Invalid input! Please enter a positive integer.");
        rl.close();
        return;
    }

    let harmonicNumber = 0;

    // Calculate harmonic number
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }

    // Print result
    console.log(`Harmonic Number H(${n}) = ${harmonicNumber.toFixed(4)}`);

    rl.close(); // Close readline interface
});
