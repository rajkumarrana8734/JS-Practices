let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
    if (n % 2 === 0) {
        console.log(n + " -> Even");
    } else {
        console.log(n + " -> Odd");
    }
});