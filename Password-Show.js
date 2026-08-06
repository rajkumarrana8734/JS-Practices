let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

 if (password.type === "password"){
    password.type = "text";
    btn.innerHTML = "Hide Password";

 }else{
    password.type = "password";
    btn.innerHTML = "Show Password";
 }

});