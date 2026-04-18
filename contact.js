// PAGE LOADER

window.addEventListener("load", () => {
  const loader = document.getElementById("pageloader");
  if (loader) loader.style.display = "none";
});

//  POPUP FUNCTION

function showPopup(message, type) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popupText");

  text.textContent = message;
  popup.className = "popup show " + type;

  setTimeout(() => {
    popup.className = "popup";
  }, 3000);
}

//  FORM SUBMIT + LOADER

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();
  const country = document.getElementById("country").value;

  const genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const loader = document.getElementById("loader");
  const btnText = document.getElementById("btnText");
  const submitBtn = document.getElementById("submitBtn");


  // VALIDATION
  if (name === "" || email === "" || phone === "" || address === "" || message === "") {
    showPopup("Please fill all fields!", "error");
    return;
  }

  if (!emailRegex.test(email)) {
    showPopup("Enter valid email!", "error");
    return;
  }

  if (!gender) {
    showPopup("Please select gender!", "error");
    return;
  }

  if (country === "") {
    showPopup("Please select country!", "error");
    return;
  }


  // SHOW LOADER
  loader.style.display = "inline-block";
  btnText.textContent = "Sending...";
  submitBtn.disabled = true;


  // SIMULATE API CALL
  setTimeout(() => {

    loader.style.display = "none";
    btnText.textContent = "Submit";
    submitBtn.disabled = false;

    showPopup("Message sent successfully!", "success");

    form.reset();

  }, 2000);
});


//  ENTER → NEXT FIELD

const fields = document.querySelectorAll(
  "#contactForm input, #contactForm select, #contactForm textarea"
);

fields.forEach((field, index) => {
  field.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      if (index + 1 < fields.length) {
        fields[index + 1].focus();
      }
    }
  });
});

//  RESET BUTTON POPUP

form.addEventListener("reset", () => {
  showPopup("Form cleared!", "success");
});


//  BACK TO TOP

const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});