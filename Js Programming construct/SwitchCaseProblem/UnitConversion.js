const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display conversion options
console.log("Choose a conversion option:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Ask for user choice
rl.question("Enter your choice (1-4): ", (choiceInput) => {
    let choice = parseInt(choiceInput);

    // Validate user choice
    if (choice < 1 || choice > 4 || isNaN(choice)) {
        console.log("Invalid choice! Please enter a number between 1 and 4.");
        rl.close();
        return;
    }

    // Ask for the value to convert
    rl.question("Enter the value to convert: ", (valueInput) => {
        let value = parseFloat(valueInput); // Convert input to float

        if (isNaN(value) || value <= 0) {
            console.log("Invalid value! Please enter a positive number.");
            rl.close();
            return;
        }

        let convertedValue;

        // Perform conversion based on user choice
        switch (choice) {
            case 1:
                convertedValue = value * 12; // Feet to Inch
                console.log(`${value} Feet = ${convertedValue} Inches`);
                break;
            case 2:
                convertedValue = value * 0.3048; // Feet to Meter
                console.log(`${value} Feet = ${convertedValue.toFixed(4)} Meters`);
                break;
            case 3:
                convertedValue = value / 12; // Inch to Feet
                console.log(`${value} Inches = ${convertedValue.toFixed(4)} Feet`);
                break;
            case 4:
                convertedValue = value / 0.3048; // Meter to Feet
                console.log(`${value} Meters = ${convertedValue.toFixed(4)} Feet`);
                break;
            default:
                console.log("Invalid choice!");
        }

        rl.close(); // Close the readline interface
    });
});
