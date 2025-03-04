const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for input
rl.question("Enter a single digit number (0-9): ", (numInput) => {
    let num = parseInt(numInput); // Convert input to integer

    switch (num) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Invalid input! Please enter a single-digit number (0-9).");
    }

    rl.close(); // Close the readline interface
});
