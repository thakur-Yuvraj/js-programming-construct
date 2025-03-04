const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Ask for user input
rl.question("Enter a non-negative integer: ", (input) => {
    let num = parseInt(input);

    // Validate input
    if (isNaN(num) || num < 0) {
        console.log("Invalid input! Please enter a non-negative integer.");
    } else {
        console.log(`Factorial of ${num} (${num}!) is: ${factorial(num)}`);
    }

    rl.close(); // Close readline interface
});
