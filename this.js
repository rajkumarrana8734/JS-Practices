//this keyword logic

//function 

function abcd(){
    console.log(this);
}
abcd();
//globle scope
console.log(this);

//methgod

const obj = {
    name:'raj',
    age:23,
    say:function(){
        console.log(this.age);
    }
}

obj.say();

