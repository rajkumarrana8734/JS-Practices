
//let variable are not be redeclear but he reassigned
let x=5;
let x=10;

//varv is a scope of function ts is not tdz(temporal dead zone)
console.log(count);
var count=55;

//let and const is filly blocked scoped variable.
{
    const b=2;
    let a="raj";
}

console.log(b);
console.log(a);


