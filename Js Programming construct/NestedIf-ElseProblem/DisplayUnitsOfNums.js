const { stdin, stdout } = require("process");
const readline = require("readline");


// readline interface
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});


// taking input number
rl.question("Enter a number", (number) => {
    let num = parseInt(number);
    if (isNaN(num) || num < 0) {
        console.log("Enter a valid input");
    }
    else if (num < 10) {
        console.log("Unit");
    }
    else if (num < 100) {
        console.log("Tens");
    }
    else if (num < 1000) {
        console.log("Hundred");
    }
    else if (num < 10000) {
        console.log("Thousand");
    }
    else if (num < 100000) {
        console.log("TenThousand");
    }
    else if (num < 1000000) {
        console.log("Lakhs");
    }
    else if (num < 10000000) {
        console.log("TenLakhs");
    }
    else {
        console.log("Corores");
    }

    // closing the input
    rl.close();
});