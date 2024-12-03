import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

const corruptedMemory = input;

// Patterns to identify instructions
const combinedPattern = /(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g;
const mulPattern = /mul\((\d{1,3}),(\d{1,3})\)/;

// Tracking variables
let isEnabled = true; // Multiplications are initially enabled
let totalSum = 0;

// Parse through the memory sequentially
let match;
while ((match = combinedPattern.exec(corruptedMemory)) !== null) {
  const instruction = match[0];

  if (instruction === "do()") {
    isEnabled = true;
  } else if (instruction === "don't()") {
    isEnabled = false;
  } else if (mulPattern.test(instruction) && isEnabled) {
    const [, x, y] = instruction.match(mulPattern);
    totalSum += parseInt(x, 10) * parseInt(y, 10);
  }
}

console.log(`Sum of enabled multiplication results: ${totalSum}`);
