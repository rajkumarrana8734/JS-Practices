// Ek <h1> ka text "Hello" se "Welcome" karo.

let heading = document.querySelector(".h1");
heading.textContent = "Welcome";
console.dir(heading);

// Ek paragraph ka color blue karo.

let paragraph = document.querySelector(".pag");
paragraph.style.color = "blue";
console.dir(paragraph);

//Button click par alert dikhao.

let btn = document.querySelector(".btn");
btn.setAttribute("onclick", "alert('Button clicked!')");

//Button click par background color change karo
let btn2 = document.querySelector(".btn2");
btn2.setAttribute("onclick", "document.body.style.backgroundColor = 'green';");

// Ek image ka src change karo.

let img = document.querySelector("img");
img.src = "https://images.unsplash.com/photo-1779896412017-0583c466e261?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";
img.style.width = "300px";

// Button click par paragraph hide/show karo.

let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }

});


// Button Click Par Naya <li> Add Karo
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let list = document.getElementById("list");

btn.addEventListener("click", function () {

    let li = document.createElement("li");

    li.innerText = input.value;

    list.appendChild(li);

    input.value = "";

});