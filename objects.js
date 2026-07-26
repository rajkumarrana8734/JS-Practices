//1. create an object for a book (title,author,price)

// let obj = {
//     title:"harry potter",
//     author:"mark wesaly",
//     price:"750"
// }
// console.log(obj);

//2. access properties using both dot and bracet

// let obj = {
//     title:"harry potter",
//     author:"mark wesaly",
//     price:"750"
// }
// console.log(obj.title);
// console.log(obj["title"]);


//3. write a nested object (user with address and location)

// let user = {
//     name:"raj",
//     age:19,
//     address:{
//         city:"surat",
//         state:"gujarat",
//     location:{
//         lat:12.2323123,
//         log:34.32131

//        }
//     }
// };


// user.address.location.log;

//4. destructure name aand age from student object

// let student={
//     name:"raj",
//     age:19
// }

// let {name,age} = student;

//5. loop through keys and values of an object

// let student = {
//     name: "Raj",
//     age: 18,
//     grade: "A"
// };

// for (let key in student){
//        console.log(key,student[key]);
// };

//6. convert object to array using object.entries()

// let student = {
//     name: "Raj",
//     age: 18,
//     grade: "A"
// };

// console.log(Object.entries(student));


//.7 copy an object using spread operator

// let user = {
//     name:"raj",
//     age:19,
//     address:{
//         city:"surat",
//         state:"gujarat",
//     location:{
//         lat:12.2323123,
//         log:34.32131

//        }
//     }
// };

// let newUser = {...user};
// console.log(newUser);


//8.  create a deep copy of an object with nested structure

// let stud = {
//      name:"sagar",
//      class:"fYbca",
//      age:19,
//      rollno:212,
//      address:{
//         city:"surat",
//         state:"gujarat",
//     location:{
//         lat:12.2323123,
//         log:34.32131

//        }
//     }

// };


// let deepcopy = JSON.parse(JSON.stringify(stud));

// deepcopy.name = "rajkumar";
// deepcopy.address.city = "navsari";

// console.log(stud.address.city);      // surat
// console.log(deepcopy.address.city);  // navsari

//9. use optional chaining to safely access deep values

// let user = {
//     name:"sagar",
//     class:10,
//     city:"surat"

// };

// console.log(user?.names?);

//10. use a variable as a key using properites

// let key = "name";

// let student = {
//     [key]: "Rajkumar"
// };

// console.log(student);