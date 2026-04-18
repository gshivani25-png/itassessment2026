// BACK TO TOP
const backTop = document.querySelector(".foot-panel1");

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}