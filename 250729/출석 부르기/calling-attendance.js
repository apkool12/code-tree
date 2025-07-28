const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

if (num == 1) {
    console.log("John");
} else if (num == 2) {
    console.log("Tom");
} else if (num == 3) {
    console.log("Paul");
} else {
    console.log("Vacancy");
}