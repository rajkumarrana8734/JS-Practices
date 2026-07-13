//writ a program rock paper scisor game code

function game(user,computer){
    if (user === "paper" && computer === "rock") return "win user";
    if (user === "scissor" && computer === "paper") return "win user";
    if (user === "rock" && computer === "scissor") return "win user";
    return "win computer";
}

console.log(game("paper","scissor"));