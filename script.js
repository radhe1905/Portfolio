/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "B.Tech CSE Student",
    "Web Designer",
    "Problem Solver",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 120
    );
}

typeEffect();


/* ==========================
   DARK MODE
========================== */

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
    themeBtn.querySelector("i");

    if (
        document.body.classList.contains("light-mode")
    ) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".section, .project-card, .skill-card, .counter-card"
);

function revealOnScroll() {

    const windowHeight =
    window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
        element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";
        }

    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


/* ==========================
   CONTACT FORM
========================== */

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
        "Thank you for contacting me! I'll get back to you soon."
    );

    contactForm.reset();

});