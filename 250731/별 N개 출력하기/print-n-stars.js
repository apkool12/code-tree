const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let i = 0;

while (i < num) {
    console.log('*');
    i++;
}