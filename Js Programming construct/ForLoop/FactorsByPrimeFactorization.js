const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors
function primeFactors(n) {
    let factors = [];

    // Divide by 2 until n becomes odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Ask for user input
rl.question("Enter a positive integer: ", (input) => {
    let num = parseInt(input);

    // Validate input
    if (isNaN(num) || num <= 0) {
        console.log("Invalid input! Please enter a positive integer.");
    } else {
        let factors = primeFactors(num);
        console.log(`Prime factors of ${num} are: ${factors.join(", ")}`);
    }

    rl.close(); // Close readline interface
});
