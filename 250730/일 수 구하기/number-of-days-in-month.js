const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

//31일 기준 1 3 5 7 8 10 12;
//30일 기준 4 6 9 11;
//28일 기준 2;

if (n === 2) {
    console.log(28);
} else if (n === 4 || n === 6 || n === 9 || n === 11) {
    console.log(30);
} else {
    console.log(31);
}