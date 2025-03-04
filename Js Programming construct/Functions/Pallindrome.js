const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is a palindrome
function isPalindrome(num) {
    let original = num.toString();         // Convert number to string
    let reversed = original.split("").reverse().join(""); // Reverse the string
    return original === reversed;          // Check if original and reversed are same
}

// Function to get two numbers from user and check for palindrome
function checkPalindromes() {
    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            num1 = parseInt(num1);
            num2 = parseInt(num2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input! Please enter valid numbers.");
            } else {
                console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome.`);
                console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome.`);
            }
            rl.close();
        });
    });
}

// Start the program
checkPalindromes();
