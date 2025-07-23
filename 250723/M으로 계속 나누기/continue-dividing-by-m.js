const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = Number(arr[0]);
let m = Number(arr[1]);

while (n > 0) {
    console.log(n)
    n = Math.floor(n/m);
}