const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const len1 = input[0].length;
const len2 = input[1].length;

if (len1 > len2) {
    console.log(`${input[0]} ${len1}`);
} else if (len2 > len1) {
    console.log(`${input[1]} ${len2}`);
} else {
    console.log("same");
}
