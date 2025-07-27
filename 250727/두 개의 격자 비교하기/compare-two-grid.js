const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr1 = [];
const arr2 = [];

for (let i = 1; i <= n; i++) {
    arr1.push(input[i].split(" ").map(Number));
}
for (let i = n + 1; i <= n * 2; i++) {
    arr2.push(input[i].split(" ").map(Number));
}

const result = [];

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            row.push(0);
        } else {
            row.push(1);
        }
    }
    console.log(row.join(" "));
}
