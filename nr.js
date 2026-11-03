// let head = document.getElementById("h1");
// let device = document.getElementById("device");

// device.addEventListener("change",function(dets){
//    head.textContent=`${dets.target.value} device selected`
//    head.style.color="red"
// })

// ====================================================================

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",function(dets){
//     if(dets.key === " "){
//         h1.textContent="SPCACE"
//     }
//     else{
//     h1.textContent=dets.key;
//     }
    
// })

// ==============================================================================

// let fileinp = document.getElementById("file");
// let btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
//     fileinp.click();
// })

// fileinp.addEventListener("change",function(dets){
//      const file =dets.target?.files[0];
//      if(file){
//         btn.textContent=file.name; 
//      }
// })

// =======================================================================================


// let boxi = document.querySelector("#main");

// window.addEventListener("mousemove",function (dets) {
//     boxi.style.top = dets.clientY+"px";
//       boxi.style.left = dets.clientX+"px";
// });

// =================================================================================

// let A = document.getElementById("box!");

// A.addEventListener("click",function(){
//     alert("clicked")
// })

// =======================================================================================

// let ul = document.querySelector("ul");



// ul.addEventListener("click",function(dets){
//     dets.target.ClassList.toogle("lt");
// });

// ===========================================================================================


let  input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input",function(dets){
    let left =20 - input.value.length;
    span.textContent = left
    if(left < 0){
        span.style.color="red";}
    else{
        span.style.color="white"
    }
    
});