const menuBtn = document.querySelector("#btn-menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtn1 = document.querySelector(".mobile-nav-a1");
const mobileNavBtn2 = document.querySelector(".mobile-nav-a2");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    mobileNav.classList.toggle("active")
})


mobileNavBtn1.addEventListener("click", () => {
    menuBtn.classList.remove("fa-times");
    mobileNav.classList.remove("active")
})

mobileNavBtn2.addEventListener("click", () => {
    menuBtn.classList.remove("fa-times");
    mobileNav.classList.remove("active")
})
