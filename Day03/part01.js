import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

const corruptedMemory = input;

// Regular expression to match valid `mul` instructions
const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

// Find all matches
const matches = [];
let match;
while ((match = pattern.exec(corruptedMemory)) !== null) {
  // Add valid pairs of operands to the results list
  matches.push([parseInt(match[1], 10), parseInt(match[2], 10)]);
}

// Calculate the sum of multiplication results
const result = matches.reduce((sum, [x, y]) => sum + x * y, 0);

console.log(`Sum of multiplication results: ${result}`);
