import fs from "fs";

// Read input from the file
const input = fs.readFileSync("input.txt", "utf8");

// Split input into lines (reports)
const reports = input.split("\r\n");

const isSafe = (levels) => {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    // If the difference is invalid, the report is not safe
    if (diff < -3 || diff > 3 || diff === 0) return false;

    // Update flags based on the difference
    if (diff > 0) decreasing = false;
    if (diff < 0) increasing = false;
  }

  // A report is safe if it's either strictly increasing or strictly decreasing
  return increasing || decreasing;
};

// Count safe reports
const safeReports = reports.reduce((count, report) => {
  const levels = report.split(" ").map(Number);
  return isSafe(levels) ? count + 1 : count;
}, 0);

console.log(safeReports);
