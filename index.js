const stff = document.querySelector(".stff");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.classList.add("square");
  } else {
    navbar.classList.remove("square");
  }
});

const sliderWrapper = document.querySelector(".slider-wrapper");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slides = document.querySelectorAll(".slide");

let currentSlideIndex = 0;

prevButton.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateSlides();
});

nextButton.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  updateSlides();
});

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
