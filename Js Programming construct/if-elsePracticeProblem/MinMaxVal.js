// Generate 5 random three-digit numbers (100-999)
let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

console.log(`Generated Numbers: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);

// Initialize min and max values
let min = num1;
let max = num1;

// Compare each number to find min and max
if (num2 < min) min = num2;
if (num2 > max) max = num2;

if (num3 < min) min = num3;
if (num3 > max) max = num3;

if (num4 < min) min = num4;
if (num4 > max) max = num4;

if (num5 < min) min = num5;
if (num5 > max) max = num5;


// printing the output
console.log(`Minimum Value: ${min}`);
console.log(`Maximum Value: ${max}`);
