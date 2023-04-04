// Nav toggle
const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
navToggle.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active");
    navToggle.classList.toggle("active");
});
mobileNavLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        mobileNav.classList.remove("active");
        navToggle.classList.remove("active");
    });
});
// Testimonial buttons
const testimonialButtons = document.querySelectorAll(".circle");
const testimonialButtonOne = document.getElementById("testimonial-1");
const testimonialButtonTwo = document.getElementById("testimonial-2");
const testimonialButtonThree = document.getElementById("testimonial-3");
const testimonialItems = document.querySelectorAll(".testimonial-item");
const testimonialOne = document.querySelector(".ti-1");
const testimonialTwo = document.querySelector(".ti-2");
const testimonialThree = document.querySelector(".ti-3");
const testimonialWrapper = document.querySelector(".wrapper");
let slideIndex = 0;
testimonialButtonOne.addEventListener("click", ()=>{
    removeActiveItems();
    testimonialButtonOne.classList.add("active");
    testimonialOne.classList.add("active");
    slideIndex = 0;
    slideTestomonials();
});
testimonialButtonTwo.addEventListener("click", ()=>{
    removeActiveItems();
    testimonialButtonTwo.classList.add("active");
    testimonialTwo.classList.add("active");
    slideIndex = 1;
    slideTestomonials();
});
testimonialButtonThree.addEventListener("click", ()=>{
    removeActiveItems();
    testimonialButtonThree.classList.add("active");
    testimonialThree.classList.add("active");
    slideIndex = 2;
    slideTestomonials();
});
function removeActiveItems() {
    testimonialButtons.forEach((button)=>{
        button.classList.remove("active");
    });
    testimonialItems.forEach((item)=>{
        item.classList.remove("active");
    });
}
function slideTestomonials() {
    let slidePercent = 100 / 3 * slideIndex;
    testimonialWrapper.style.transform = `translateX(-${slidePercent}%)`;
}
// Contact submit button
const submitBtn = document.getElementById("submit-btn");
const inputs = document.querySelectorAll(".form input");
const textarea = document.querySelector(".input-large");
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    inputs.forEach((input)=>{
        input.value = "";
    });
    textarea.value = "";
});

//# sourceMappingURL=index.44983732.js.map
