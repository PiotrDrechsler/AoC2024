import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

// Split input into lines and remove the last empty line

const code = input.split("\n");
const row1 = [];
const row2 = [];

// Parse the input into two arrays
code.forEach((line) => {
  row1.push(parseInt(line.split("   ")[0]));
  row2.push(parseInt(line.split("   ")[1]));
});

const rightCount = row2.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

// Calculate the similarity score
let similarityScore = 0;
row1.forEach((num) => {
  similarityScore += num * (rightCount[num] || 0);
});

console.log("Similarity score:", similarityScore);
