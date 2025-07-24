const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

const answer = ((num%2===1)&&(num%3===0)) || ((num%2===0)&&(num%5===0)) ? true : false;

console.log(answer)