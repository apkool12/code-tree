const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let re = 0;

for (let i = 0; i < num; i++) { 
    const arr = [];
    if (re !== 1) {
        for (let j = 1; j <= num; j++) { 
            arr.push(j);
         }
         re = 1;
    }
    else {
        for (let j = num; j >= 1; j--) { 
            arr.push(j);
        }
        re = 0;
    }
    console.log(arr.join(""))
}