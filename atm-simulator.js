let account = {
    name : "raj",
    balance : 5000
};

let output = document.querySelector("#output");

function showbalance(){
    output.innerText = `Account Holder: ${account.name}
     balance: $${account.balance}`;
};

document.querySelector("#balance")
.addEventListener("click",function(){
    
    showbalance();

});



document.getElementById("deposit")
    .addEventListener("click", function () {

        account.balance = account.balance + 1000;

        showbalance();

    });

document.querySelector("#withdraw")
.addEventListener("click",function(){
    if(account.balance >= 500){
            account.balance = account.balance - 500;
            showbalance();
    }
    else{
        output.innerText = "Insufficient Balance";
    }

});

