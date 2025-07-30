const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ");
const b = input[1].split(" ");

const age_a = Number(a[0]);
const gender_a = a[1];

const age_b = Number(b[0]);
const gender_b = b[1];

if ((age_a >= 19 && gender_a == "M") || (age_b >= 19 && gender_b == "M")) {
    console.log(1);
} else {
    console.log(0);
}