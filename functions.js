//(1)create a greed function with default function


function greed(name="ram"){
         console.log("hello "+name);

}

// greed();
greed("sita");

//(2) sum all num using rest parametrs

function sum(...val){
     let total=0;
     for (let num of val){
        total += num;
     }
     return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

//(3) create a closure counter function

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

//(4) create a function then return another function

function good(val){
    return function(){
        console.log("very "+ val);
    }
}

const like = good("good");
like();