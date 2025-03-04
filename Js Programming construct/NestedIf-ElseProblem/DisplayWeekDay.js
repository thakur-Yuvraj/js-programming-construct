const readline = require("readline");

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// taking input num
rl.question("enter a weekDay", (num) => {
    let num = parseInt(num);
    if (num < 1 || num > 7 || isNaN(num)) {
        console.log("Invalid number");
    }
    else if (num == 1) {
        console.log("Monday");
    }
    else if (num == 2) {
        console.log("Tuesday");
    }
    else if (num == 3) {
        console.log("Wednesday");
    }
    else if (num == 4) {
        console.log("Friday");
    }
    else if (num == 5) {
        console.log("Saturday");
    }
    else {
        console.log("Sunday");
    }

    // closing the input
    rl.close();
});

