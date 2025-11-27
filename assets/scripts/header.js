import { transitionDuration } from "./variables.js"

const header = () => document.querySelector(".j_header")

export const HeaderBehavior = () => {
    window.scrollY > 0
        ? header().classList.add("scrolling")
        : header().classList.remove("scrolling")
}