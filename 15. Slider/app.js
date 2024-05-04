const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (item, index) {
    item.style.left = `${index * 100}%`
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
})

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
})

function carousel () {
    if (counter === slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function (item) {
        item.style.transform = `translateX(-${counter * 100}%)`;
        item.style.transition = "all 0.9s ease";
    })
}