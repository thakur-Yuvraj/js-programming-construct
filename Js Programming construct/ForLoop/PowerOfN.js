const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for input
rl.question("Enter a non-negative integer (n): ", (input) => {
    let n = parseInt(input);

    // Validate input
    if (isNaN(n) || n < 0) {
        console.log("Invalid input! Please enter a non-negative integer.");
        rl.close();
        return;
    }

    // Print table of powers of 2
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }

    rl.close(); // Close the readline interface
});
