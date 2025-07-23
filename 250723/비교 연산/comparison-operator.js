const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);

if (a >= b) {
    console.log(1);
} else {
    console.log(0);
}
if (a > b) {
    console.log(1);
} else {
    console.log(0);
}
if (b >= a) {
    console.log(1);
} else {
    console.log(0);
}
if (b > a) {
    console.log(1);
} else {
    console.log(0);
}
if (a == b) {
    console.log(1);
} else {
    console.log(0);
}
if (a != b) {
    console.log(1);
} else {
    console.log(0);
}