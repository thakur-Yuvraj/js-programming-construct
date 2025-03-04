const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check if number and its palindrome are both prime
function checkPrimeAndPalindrome() {
    rl.question("Enter a number: ", (input) => {
        let num = parseInt(input);

        if (isNaN(num)) {
            console.log("Invalid input! Please enter a valid number.");
            rl.close();
            return;
        }

        if (isPrime(num)) {
            console.log(`${num} is a Prime Number.`);
            let palindrome = getPalindrome(num);
            console.log(`The palindrome of ${num} is ${palindrome}.`);

            if (isPrime(palindrome)) {
                console.log(`The palindrome ${palindrome} is also a Prime Number!`);
            } else {
                console.log(`The palindrome ${palindrome} is NOT a Prime Number.`);
            }
        } else {
            console.log(`${num} is NOT a Prime Number.`);
        }

        rl.close();
    });
}

// Start the program
checkPrimeAndPalindrome();
