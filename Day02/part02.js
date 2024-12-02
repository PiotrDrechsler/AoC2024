import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

// Split input into lines (reports)
const reports = input.split("\r\n");

// Function to check if a list of levels is safe
const isSafe = (levels) => {
  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if (diff < -3 || diff > 3 || diff === 0) return false; // Invalid difference
  }

  // Check if all levels are increasing or decreasing
  const increasing = levels.every(
    (_, i) => i === 0 || levels[i] > levels[i - 1]
  );
  const decreasing = levels.every(
    (_, i) => i === 0 || levels[i] < levels[i - 1]
  );

  return increasing || decreasing;
};

// Function to check if a report can be made safe by removing one level
const canBeMadeSafe = (levels) =>
  levels.some((_, i) =>
    isSafe([...levels.slice(0, i), ...levels.slice(i + 1)])
  );

// Count all safe reports
const safeReports = reports.reduce((count, report) => {
  const levels = report.split(" ").map(Number);
  return count + (isSafe(levels) || canBeMadeSafe(levels) ? 1 : 0);
}, 0);

console.log(safeReports);
