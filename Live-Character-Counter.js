let text = document.getElementById("text");
let counter = document.getElementById("count");

text.addEventListener("input", function() {
    let charCount = text.value.length;
    counter.textContent = charCount;
});