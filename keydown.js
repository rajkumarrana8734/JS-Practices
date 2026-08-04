let h1 = document.querySelector('p');
window.addEventListener('keydown',function(data){
    if (data.key === " "){
       h1.textContent = "space";
    } else {
        h1.textContent = data.key;
    }
    }
);