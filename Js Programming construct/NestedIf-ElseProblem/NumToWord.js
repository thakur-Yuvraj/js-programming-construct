const args = process.argv.slice(2); // skip first two default args


// taking input num
let num1 = parseInt(args[0]);

// checking if it is a single digit num
if (num1 > 9 || num1 <= 0 || isNaN(num1)) {
    console.log("Invalid input");
} else if (num === 0) {
    console.log("Zero");
} else if (num === 1) {
    console.log("One");
} else if (num === 2) {
    console.log("Two");
} else if (num === 3) {
    console.log("Three");
} else if (num === 4) {
    console.log("Four");
} else if (num === 5) {
    console.log("Five");
} else if (num === 6) {
    console.log("Six");
} else if (num === 7) {
    console.log("Seven");
} else if (num === 8) {
    console.log("Eight");
} else if (num === 9) {
    console.log("Nine");
}
