const btns = document.querySelectorAll(".btn-click");
const images = document.querySelectorAll(".img");
let currentImg = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    images[currentImg].classList.add("d-none");

    if (btn.id === "btn-next") {
      currentImg = (currentImg + 1) % images.length;
    } else if (btn.id === "btn-previous") {
      currentImg = (currentImg - 1 + images.length) % images.length; 
    }

    images[currentImg].classList.remove("d-none");
  });
});
