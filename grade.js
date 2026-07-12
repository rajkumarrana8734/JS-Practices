//student grade 

function getgrade(score){
    if  (score >=90 && score <=100) return "A";
    if  (score >=80 && score <=89) return "B";
    if  (score >=70 && score <=79) return "C";
    if  (score >=60 && score <=69) return "D";
    if  (score >=33 && score <=59) return "E";
    if  (score >=0 && score <=32) return "Fail";
    return "Invalid Marks ✖️"
}

console.log(getgrade())