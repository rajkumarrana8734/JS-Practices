// age checker

function age(num){
    if (num >=0 && num <=7) return "Kid";
    if (num >=8 && num <=17) return "Teen";
    if (num >=18 && num <=55) return "Adult";
    if (num >=56 && num <=100) return "senior";
    return "not valid age"
}

console.log(age(18));