// //(1)create a greed function with default function


function greed(name="ram"){
         console.log("hello "+name);

}

// greed();
greed("sita");

// //(2) sum all num using rest parametrs

function sum(...val){
     let total=0;
     for (let num of val){
        total += num;
     }
     return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// //(3) create a closure counter function

function counter(){
        let count=0;
        return function(){
            count++;
            return count;
        };
}

const grow=counter();
console.log(grow());
console.log(grow());
console.log(grow());
console.log(grow());
console.log(grow());

// //(4) create a function then return another function

function good(val){
    return function(){
        console.log("very "+ val);
    }
}

const like = good("good");
like();

//(5) use a function to log even numbers in arrays

function even(arr){
    for ( let num of arr){
        if (num %2===0){
            console.log(num);
        }
    }

}
const numbers=[1,2,3,4,5,6,7,8,9,10];
even(numbers);

//(6) create a pure function to add tax 

function tax(price,taxrate){
    return price +  (price*taxrate);

}

console.log(tax(20000,0.18));
console.log(tax(500000,0.20));

// (7) USE iilf function display welcome message

(function (){
    console.log("Welcome friends");
}());

//(8) write a disount calculator (hof style)

function disccalculator(discount){
    return function (price){
        return price - (price * discount /100);
    }
}

const tenpercent = disccalculator(10);
const twentyprecent = disccalculator(10);

console.log(tenpercent(1000));
console.log(twentyprecent (900000));

//(9) make a touppercase  transfomer using hof

function transformer(transformFn) {
    return function (text) {
        return transformFn(text);
    };
}

const toUpper = transformer(function (str) {
    return str.toUpperCase();
});

console.log(toUpper("hello"));
console.log(toUpper("javascript"));