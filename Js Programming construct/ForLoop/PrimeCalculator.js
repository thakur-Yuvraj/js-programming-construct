const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Ask for user input
rl.question("Enter a positive integer: ", (input) => {
    let num = parseInt(input);

    // Validate input
    if (isNaN(num) || num <= 0) {
        console.log("Invalid input! Please enter a positive integer.");
    } else {
        if (isPrime(num)) {
            console.log(`${num} is a Prime Number.`);
        } else {
            console.log(`${num} is NOT a Prime Number.`);
        }
    }

    rl.close(); // Close readline interface
});