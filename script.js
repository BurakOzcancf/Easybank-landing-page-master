let hamburger = document.querySelector(".header__menu")
let closes = document.querySelector(".header__close")
let nav = document.querySelector("nav")


hamburger.addEventListener("click", () => {
    nav.classList.add("active")
    closes.style.display = "block"
    hamburger.style.display="none"
})
closes.addEventListener("click", () => {
    nav.classList.remove("active")
    hamburger.style.display = "block"
    closes.style.display = "none"
})
