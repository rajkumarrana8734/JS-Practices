// Image select
let photo = document.getElementById("photo");

// Buttons select
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Images array
let images = [
    "../images/pic1.jpg",
    "../images/pic2.jpg",
    "../images/pic3.jpg",
    "../images/pic4.jpg"
];

// Current image index
let index = 0;

// Next Button
nextBtn.addEventListener("click", function () {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    photo.src = images[index];

});

// Previous Button
prevBtn.addEventListener("click", function () {

    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    photo.src = images[index];

});