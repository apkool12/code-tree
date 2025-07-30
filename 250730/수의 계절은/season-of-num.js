const fs = requier("fs");
const input = fs.readFileSync(0).toString().trim();

const month = Number(input);

if (3 <= month <= 5) {
    console.log("Spring");
}
