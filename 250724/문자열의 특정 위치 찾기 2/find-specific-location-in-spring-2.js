const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str = ["apple","banana","grape","bluebery","orange"];
const arr = new Array();

for (let i = 0; i < str.length; i++) {
    if (str[i][2] === input|| str[i][3] === input) {
        console.log(str[i]);
        arr.push(str[i]);
    }
}

console.log(arr.length);