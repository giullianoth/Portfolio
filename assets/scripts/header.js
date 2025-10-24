import { transitionDuration } from "./variables.js"

const header = () => document.querySelector(".j_header")
const logoButton = document.querySelector(".j_logo")

export const HeaderBehavior = () => {
    window.scrollY > 0
        ? header().classList.add("scrolling")
        : header().classList.remove("scrolling")
}

export const LogoRedirect = () => {
    logoButton.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })
}