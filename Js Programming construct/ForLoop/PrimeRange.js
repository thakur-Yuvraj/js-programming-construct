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

// Function to find prime numbers in a range
function findPrimesInRange(start, end) {
    let primes = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

// Ask for user input
rl.question("Enter the start of the range: ", (startInput) => {
    rl.question("Enter the end of the range: ", (endInput) => {
        let start = parseInt(startInput);
        let end = parseInt(endInput);

        // Validate input
        if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
            console.log("Invalid input! Please enter valid positive numbers with start ≤ end.");
        } else {
            let primes = findPrimesInRange(start, end);
            if (primes.length > 0) {
                console.log(`Prime numbers between ${start} and ${end}:`, primes.join(", "));
            } else {
                console.log(`No prime numbers found in the range ${start} to ${end}.`);
            }
        }

        rl.close(); // Close readline interface
    });
});
