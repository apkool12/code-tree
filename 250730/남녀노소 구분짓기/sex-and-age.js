const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

if (input[0] == 0) {
    if (input[1] >= 19) {
        console.log("MAN");
    } else {
        console.log("BOY");
    }
} else {
    if (input[1] >= 19) {
        console.log("WOMAN");
    } else {
        console.log("GIRL");
    }
}