//Sum of Numbers

let number = [10,20,30,40,50,60,70,80,90,100];
 let sum = number.reduce(function(total,num){
     return total + (total+num);
});

console.log(sum);