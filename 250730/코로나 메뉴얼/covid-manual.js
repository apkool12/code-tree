const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = [];

for (let i = 0; i < input.length; i ++) {
    const hum = input[i].split(" ");
    if (hum[1] >= 37) {
        if (hum[0] == "Y") {
            arr.push("A");
        } else {
            arr.push("B");
        }
    } else if ((hum[0] < 37) && (hum[1] !== "Y")){
        arr.push("D");
    } else {
        if (hum[0] == "Y") {
            arr.push("C");
        }
    }
}

let em = 0;

for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === "A") {
        em += 1;
    }
}

if (em >= 2) {
    console.log("E");
} else {
    console.log("N");
}