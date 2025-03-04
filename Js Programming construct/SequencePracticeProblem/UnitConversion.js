// (a) Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`42 inches is equal to ${feet.toFixed(2)} feet`);

// (b) Convert rectangular plot dimensions from feet to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeter = 0.3048; // 1 ft = 0.3048 meters

let lengthMeters = lengthFeet * feetToMeter;
let widthMeters = widthFeet * feetToMeter;
console.log(`Rectangular plot dimensions in meters: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

// (c) Calculate area of 25 such plots in acres
let areaOnePlotFeet = lengthFeet * widthFeet; // Area in square feet
let areaOnePlotMeters = lengthMeters * widthMeters; // Area in square meters
let totalAreaMeters = areaOnePlotMeters * 25; // Total area of 25 plots
let squareMetersToAcres = 0.000247105; // 1 sq meter = 0.000247105 acres
let totalAreaAcres = totalAreaMeters * squareMetersToAcres;

console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
