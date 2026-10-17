let marks = [70, 80, 65, 90, 75];

let total = 0;

for (let mark of marks) {
    total += mark;
}

console.log("Total Marks =", total);
console.log("Average =", total / marks.length);