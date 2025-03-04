const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Invalid input! Enter temperature between 0°C and 100°C.");
        return;
    }
    let degF = (degC * 9/5) + 32;
    console.log(`${degC}°C is equal to ${degF.toFixed(2)}°F`);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Invalid input! Enter temperature between 32°F and 212°F.");
        return;
    }
    let degC = (degF - 32) * 5/9;
    console.log(`${degF}°F is equal to ${degC.toFixed(2)}°C`);
}

// Function to get user input and perform conversion
function startConversion() {
    rl.question("Choose conversion: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius\nEnter choice (1 or 2): ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter temperature in Celsius (0°C - 100°C): ", (temp) => {
                    celsiusToFahrenheit(parseFloat(temp));
                    rl.close();
                });
                break;
            case "2":
                rl.question("Enter temperature in Fahrenheit (32°F - 212°F): ", (temp) => {
                    fahrenheitToCelsius(parseFloat(temp));
                    rl.close();
                });
                break;
            default:
                console.log("Invalid choice! Please enter 1 or 2.");
                rl.close();
        }
    });
}

// Start the program
startConversion();
