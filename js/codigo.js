const menuBtn = document.querySelector("#btn-menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtn1 = document.querySelector(".mobile-nav-a1");
const mobileNavBtn2 = document.querySelector(".mobile-nav-a2");
const closeNavBtn = document.getElementById("close-mobile-nav");


menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
})


mobileNavBtn1.addEventListener("click", () => {
    mobileNav.classList.remove("active")
})

mobileNavBtn2.addEventListener("click", () => {
    mobileNav.classList.remove("active")
})

closeNavBtn.addEventListener("click", ()=>{
    mobileNav.classList.remove("active");
})
