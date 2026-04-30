import { fadeIn, fadeOut } from "./effects.js"
import ToggleBlockScroll from "./scroll.js"
import { breakpointLarge, isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon")
const menu = document.querySelector(".j_menu")
const menuOverlay = document.querySelector(".j_menu_overlay")
const menuLinks = Array.from(menuOverlay.querySelectorAll("a"))

/**
 * Closes the mobile menu.
 */
const closeMenu = () => {
    menu.classList.remove("menu-open")
    fadeOut(menuOverlay, false, () => {
        ToggleBlockScroll(false)
    })
}

/**
 * Controllers of mobile menu.
 */
const MobileMenu = () => {
    menuIcon.addEventListener("click", () => {
        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay, "flex", () => {
                menu.classList.add("menu-open")
                ToggleBlockScroll(true)
            })
        } else {
            closeMenu()
        }
    })

    menuOverlay.addEventListener("click", ({ target }) => {
        if (target.classList.contains("j_close")) {
            closeMenu()
        }
    })

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= breakpointLarge) {
                closeMenu()
            }
        })
    })
}

export default MobileMenu