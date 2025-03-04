const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for year input
rl.question("Enter a 4-digit year: ", (yearInput) => {
    let year = parseInt(yearInput);

    // Check if year is a 4-digit number
    if (year < 1000 || year > 9999) {
        console.log("Invalid input! Please enter a 4-digit year.");
    } else {
        // Leap year conditions
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log(`${year} is a Leap Year.`);
        } else {
            console.log(`${year} is NOT a Leap Year.`);
        }
    }

    // Close readline interface
    rl.close();
});
