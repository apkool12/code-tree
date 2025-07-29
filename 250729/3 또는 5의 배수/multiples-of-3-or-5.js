const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

if (num % 3 === 0) {
    console.log("YES");
} else {
    console.log("NO");
}

if (num % 5 === 0) {
    console.log("YES");
} else {
    console.log("NO");
}