// SELECT ELEMENTS
const images = document.querySelectorAll(".gallery-item img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// OPEN POPUP
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
    currentIndex = index;
  });
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// CLICK OUTSIDE CLOSE
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// NEXT IMAGE
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
});

// PREVIOUS IMAGE
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
});

// BACK TO TOP
document.querySelector(".foot-panel1").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});