const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

for (let i = 0; i < num; i++ ) {
    const arr = [];
    for (let j = 1; j <= num; j++) {
        if ( j%2 !== 0 ) {
            arr.push(i + 1);
        } else {
            arr.push(num - i);
        }
    }
    console.log(arr.join(""));
}