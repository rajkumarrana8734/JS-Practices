let btn = document.getElementById("btn");
let h1 = document.querySelector("h1");
let container = document.querySelector(".container");

btn.addEventListener("click", function () {

   if (container.style.backgroundColor === "black") {
        container.style.backgroundColor = "white";
        h1.style.color = "black";
        h1.textContent = "Light Mode";
    } else {
        container.style.backgroundColor = "black";
        h1.style.color = "white";
        h1.textContent = "Dark Mode";
    }
});

