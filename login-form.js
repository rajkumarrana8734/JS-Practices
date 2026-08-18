let user = document.querySelector("#username");
let password = document.querySelector("#password");
let login = document.querySelector("#login");
let msg = document.querySelector("#massage");

login.addEventListener("click",function(){
    if(user.value === ""){
        msg.textContent = "username requied";
        msg.style.color = "red";
    }
    else if(password.value === ""){
        msg.textContent = "password requied";
        password.style.color = "red";
    }
    else if(password.value.length < 6 ){
        msg.textContent  = "password must be 6 character"
        msg.style.color = "red";

    }
    else{
       msg.textContent = "Login successful"
       msg.style.color = "green";
    }

});