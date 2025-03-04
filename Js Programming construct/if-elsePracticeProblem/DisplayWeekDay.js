const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for day
rl.question("Enter day: ", (dayInput) => {
    let day = parseInt(dayInput);

    // Ask for month
    rl.question("Enter month: ", (monthInput) => {
        let month = parseInt(monthInput);

        // Check if date is between March 20 and June 20
        let isValid = false;

        if ((month === 3 && day >= 20) || // March 20 - 31
            (month === 4 && day >= 1 && day <= 30) || // April 1 - 30
            (month === 5 && day >= 1 && day <= 31) || // May 1 - 31
            (month === 6 && day <= 20)) { // June 1 - 20
            isValid = true;
        }

        console.log(`Is the date between March 20 and June 20? ${isValid}`);

        // Close readline interface
        rl.close();
    });
});
