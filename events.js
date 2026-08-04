// click event

let para = document.querySelector('p');
para.addEventListener('click',function(data){
    para.textContent = 'You read the paragraph';
    para.style.color = 'blue';
});

// double click event

let dbl = document.querySelector('.dbl');
dbl.addEventListener('dblclick',function(data){
    dbl.textContent = 'You double-clicked the paragraph';
    dbl.style.color = 'red';
});

// change event

let input = document.querySelector("select");
let h1 = document.querySelector("h1");
input.addEventListener('change',function(data){
    h1.textContent = `You selected: ${data.target.value}`;
});