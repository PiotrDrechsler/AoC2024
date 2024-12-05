import fs from "fs";

// Read input from the file
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n");

// Split input into rules and updates
const splitIndex = inputData.indexOf(""); // Empty line separates rules from updates
const rules = inputData
  .slice(0, splitIndex)
  .map((line) => line.split("|").map(Number));
const updates = inputData
  .slice(splitIndex + 1)
  .map((line) => line.split(",").map(Number));

// Function to check if an update is in the correct order
const isUpdateValid = (update, rules) => {
  const indexMap = new Map(update.map((page, index) => [page, index]));

  for (const [x, y] of rules) {
    if (indexMap.has(x) && indexMap.has(y)) {
      if (indexMap.get(x) > indexMap.get(y)) {
        return false; // Rule violated
      }
    }
  }
  return true;
};

// Calculate the middle page of an array
const getMiddlePage = (update) => {
  const middleIndex = Math.floor(update.length / 2);
  return update[middleIndex];
};

// Check each update and sum the middle pages of valid ones
let middlePagesSum = 0;

for (const update of updates) {
  if (isUpdateValid(update, rules)) {
    middlePagesSum += getMiddlePage(update);
  }
}

console.log("Sum of middle pages from valid updates:", middlePagesSum);
