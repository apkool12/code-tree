const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let score = Number(input);

let result = "";

while (score <= 100) {
  if (score >= 90) {
    result += "A ";
  } else if (score >= 80) {
    result += "B ";
  } else if (score >= 70) {
    result += "C ";
  } else if (score >= 60) {
    result += "D ";
  } else {
    result += "F ";
  }
  score++;
}

console.log(result.trim());
