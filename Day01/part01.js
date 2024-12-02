import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

// Split input into lines 

const code = input.split("\n");
const row1 = [];
const row2 = [];

// Parse the input into two arrays
code.forEach((line) => {
  row1.push(parseInt(line.split("   ")[0]));
  row2.push(parseInt(line.split("   ")[1]));
});

// Sort both arrays
row1.sort((a, b) => a - b);
row2.sort((a, b) => a - b);

// Calculate the total distance
let totalDistance = 0;
for (let i = 0; i < row1.length; i++) {
  totalDistance += Math.abs(row1[i] - row2[i]);
}

console.log("Total distance:", totalDistance);
