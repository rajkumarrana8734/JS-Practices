// Q1. Print numbers from 1 to 10 using a for loop.

for(let i=1;i<11;i++){
    console.log(i) 
    
}

// Q2. Print numbers from 10 to 1 using a while loop.
let i = 10
while(i>0){
    console.log(i)
    i--;
}

// Q3. Print even numbers from 1 to 20 using a for loop.

for (let i=1;i<21;i++){0
    if(i%2==0){
        console.log(i)
    }
}

// Q4. Print odd numbers from 1 to 15 using a while loop.

let i = 1
while(i<16){
    if(i%2===1){
        console.log(i)
    }
    i++
}

// Q5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 … 5 × 10 = 50)

for(let i = 1;i<11;i++){
    console.log(`5 * ${i} = ${5 * i}`)

}

// Q6. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for (let i = 1;i<101;i++){
    sum = sum + i;


}

console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.
for (let i=1;i<51;i++){
    if(i%3===0){
        console.log(i);
    }
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is odd or even.
//  ("1 is odd", "2 is even", …)

let num = prompt("enter your number")
for(let i = 1;i<num;i++){
    if(i%2===0){
          console.log( ` ${i} is even`);
    }
else{
         console.log(`${i} is odd`);
}
}

// ✅ Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

for (let i=1;i<101;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i)
    }
}