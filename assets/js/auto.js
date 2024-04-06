const images = document.querySelectorAll(".img");
let currentImg = 0;

function transitionSlide() {
  images[currentImg].classList.add("d-none");

  currentImg = (currentImg + 1) % images.length;

  images[currentImg].classList.remove("d-none");
}
setInterval(transitionSlide, 1000);
