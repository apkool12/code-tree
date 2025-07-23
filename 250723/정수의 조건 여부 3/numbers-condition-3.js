const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

const answer = (num % 13 === 0 || num % 19 === 0) ? "True" : "False";

console.log(answer);