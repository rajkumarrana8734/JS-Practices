let numbers = [1,2,3,4,5,7,8,9,10]

for (let i = 1; i <= 10; i++) {

    if (numbers.includes(i) === false) {

        console.log("Missing number is: " + i);

    }

}