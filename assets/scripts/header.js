import { transitionDuration } from "./variables.js"

const header = () => document.querySelector(".j_header")
const linkBackButton = Array.from(document.querySelectorAll(".j_link_back"))

export const HeaderBehavior = () => {
    window.scrollY > 0
        ? header().classList.add("scrolling")
        : header().classList.remove("scrolling")
}

export const LogoRedirect = () => {
    linkBackButton.forEach(link => {
        link.addEventListener("click", () => {
            window.scrollTo(0, 0)
        })
    })

    // logoButton.addEventListener("click", () => {
    //     window.scrollTo(0, 0)
    // })
}