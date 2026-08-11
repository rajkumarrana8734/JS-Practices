let position = document.querySelector("#position")
document.addEventListener("mousemove",function(e){
             position.innerText=
             "Mouse X:"+e.clientX+"!Mouse Y:"+e.clientY; 
});