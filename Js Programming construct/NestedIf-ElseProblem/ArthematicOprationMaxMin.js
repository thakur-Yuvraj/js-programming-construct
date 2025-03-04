const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for input
rl.question("Enter three numbers (a, b, c) separated by space: ", (input) => {
    let numbers = input.split(" ").map(Number); // Convert input to array of numbers

    if (numbers.length !== 3 || numbers.some(isNaN)) {
        console.log("Invalid input! Please enter three valid numbers.");
        rl.close();
        return;
    }

    let [a, b, c] = numbers; // Destructure input into a, b, c

    // Perform operations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    // Store results in an array
    let results = [result1, result2, result3, result4];

    // Find maximum and minimum
    let maxResult = Math.max(...results);
    let minResult = Math.min(...results);

    // Print results
    console.log(`Results of operations:`);
    console.log(`1. a + b * c = ${result1}`);
    console.log(`2. a % b + c = ${result2}`);
    console.log(`3. c + a / b = ${result3}`);
    console.log(`4. a * b + c = ${result4}`);
    console.log(`Maximum value: ${maxResult}`);
    console.log(`Minimum value: ${minResult}`);

    rl.close(); // Close the readline interface
});
