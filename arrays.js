//1. create an array of student names and print each

let arr = ["rajkumar","sagar","sameer","narayan"]
console.log(arr)

//2. filter even number from an array

let arr = [1,2,3,4,5,6,7,8,9,10]
let  newarray = arr.filter(function(val){
      return val%2===0;
});

console.log(newarray)

// 3. map price include GST (18%)

let arr = [200,300,400,600,800]
let gst=arr.map(function(price){
   return price + (price* 18/100);
})

console.log(gst)

//4. reduce salaries to calculate total payroll


let salary = [2000,5000,8000,10000,3000]
let cal = salary.reduce(function(total,sal){
    return total + sal;
});

console.log(cal);

// 5. find the first student student with a grade

let student = [
    {name :"sagar", grade:"A"},
    {name :"rahul", grade:"D"},
    {name :"meet", grade:"C"},
    {name :"amit", grade:"B"},

]

let stud = student.find(function(val){
    return  val.grade === "A";
});

console.log(stud);

//6. write a function to reverse an array



function num(a){
       return a.reverse();
};

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(num(arr));

//7. sort array of ages in ascending order

let num = [12,32,43,64,24,13,64,24,21,18];

let ages = num.sort(function(a,b){
    return a-b;
});
console.log(ages);

// 8. distructurev first two elementes of an array 

let num = [12,32,43,41,44,11,23];
let [first,second,third] = num ;
console.log(first);
console.log(second);
console.log(third);

// 9. use some() to cheak if any student failed

const students = [
    { name: "Sagar", passed: true },
    { name: "Rahul", passed: false },
    { name: "Meet", passed: true },
    { name: "Amit", passed: true }
];


const Failed = students.some(function (student) {
    return student.passed === false;
});

console.log(Failed); 

//10. use spread to copy and new item 

let num = [1,23,3,4,5534,4,22,524,22];
let copy = [...num];

console.log(copy);
console.log(num);

