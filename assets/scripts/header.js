import { transitionDuration } from "./variables.js"

/**
 * The header DOM element.
 * @returns {HTMLElement | undefined}
 */
const header = () => document.querySelector(".j_header")

/**
 * Adds or removes "scrolling" class according the viewport scroll behavior.
 */
export const HeaderBehavior = () => {
    window.scrollY > 0
        ? header().classList.add("scrolling")
        : header().classList.remove("scrolling")
}