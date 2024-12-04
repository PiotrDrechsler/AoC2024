import fs from "fs";

// Read input from the file
const data = fs.readFileSync("input.txt", "utf8").split("\n");

// Initialize the words array
let words = [];

for (let i = 0; i < data.length; i++) {
  const row = data[i];

  for (let j = 0; j < row.length; j++) {
    // Check if there's enough characters ahead for the horizontal word
    if (j + 3 < row.length) {
      words.push([row[j], row[j + 1], row[j + 2], row[j + 3]]);
    }

    // Check if there's enough rows ahead for the vertical word
    if (i + 3 < data.length) {
      words.push([data[i][j], data[i + 1][j], data[i + 2][j], data[i + 3][j]]);
    }

    // Check if there's enough rows and columns ahead for diagonal down-right word
    if (i + 3 < data.length && j + 3 < row.length) {
      words.push([
        data[i][j],
        data[i + 1][j + 1],
        data[i + 2][j + 2],
        data[i + 3][j + 3],
      ]);
    }

    // Check if there's enough rows and columns ahead for diagonal up-right word
    if (i + 3 < data.length && j - 3 >= 0) {
      words.push([
        data[i][j],
        data[i + 1][j - 1],
        data[i + 2][j - 2],
        data[i + 3][j - 3],
      ]);
    }
  }
}

// Count occurrences of "XMAS" or "SAMX"
const xmas = words.filter(
  (word) => word.join("") === "XMAS" || word.join("") === "SAMX"
).length;

// Count occurrences of "XMAS"
console.log("Total occurrences of XMAS:", xmas);
