// SMOOTH SCROLL GOR NAV LINKS

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        // Only apply smooth scroll for internal links
        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
        // else → normal navigation works
    });
});

// PAGE LOADER + NAVBAR ANIMATION

window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    if (loader) loader.style.display = "none";

    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.top = "0";
});

// START LEARNING BUTTON SCROLL

const startBtn = document.querySelector(".banner-content button");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        const topicsSection = document.querySelector(".topics");
        if (topicsSection) {
            topicsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// BACK TO TOP BUTTON

const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

//  SEARCH → SCROLL + HIGHLIGHT

const topicElements = document.querySelectorAll(".topic-container .topic");
const searchInput = document.querySelector(".search input");

if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim().toLowerCase();
            let found = false;

            const topicsSection = document.querySelector(".topics");

            // Scroll to topics
            if (topicsSection) {
                topicsSection.scrollIntoView({ behavior: "smooth" });
            }

            // Remove previous highlight
            topicElements.forEach(topic => {
                topic.classList.remove("highlight");
            });

            // Highlight matching topics
            topicElements.forEach(topic => {
                const text = topic.textContent.toLowerCase();

                if (text.includes(query) && query !== "") {
                    topic.classList.add("highlight");
                    found = true;
                }
            });

            // Alert if not found
            if (!found && query !== "") {
                alert("No matching topic found!");
            }
        }
    });
}

//  GALLERY POPUP

const images = document.querySelectorAll(".gallery-container img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

if (images && popup && popupImg && closeBtn) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target !== popupImg) {
            popup.style.display = "none";
        }
    });
}

//  NEWSLETTER VALIDATION

const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
        const emailInput = document.querySelector(".newsletter input");
        const email = emailInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Please enter your email!");
        } 
        else if (!emailRegex.test(email)) {
            alert("Please enter a valid email!");
        } 
        else {
            alert("Subscribed successfully!");
            emailInput.value = "";
        }
    });
}

//  GALLERY BUTTON REDIRECT

const galleryBtn = document.querySelector(".gallery-btn");

if (galleryBtn) {
    galleryBtn.addEventListener("click", () => {
        window.location.href = "gallery.html";
    });
}

//  OPEN TOPIC (FOR CLICKABLE TOPICS)

function openTopic(topicName) {
    window.location.href = "topics.html?topic=" + topicName;
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function openTopic(topicName){
    window.location.href = "topics.html?topic=" + topicName;
}



