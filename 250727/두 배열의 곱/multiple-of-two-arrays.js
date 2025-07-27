const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").filter(Boolean);

const arr1 = [];
const arr2 = [];

for (let i = 0; i < 3; i++) {
    arr1.push(input[i].split(" ").map(Number));
}

for (let i = 3; i < 6; i++) {
    arr2.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 3; i++) {
    const line = [];
    for (let j = 0; j < 3; j++) {
        line.push(arr1[i][j] * arr2[i][j]);
    }
    console.log(line.join(" "));
}
