import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon")
const menu = document.querySelector(".j_menu")
const menuOverlay = document.querySelector(".j_menu_overlay")
const menuLinks = Array.from(menuOverlay.querySelectorAll("a"))

const closeMenu = () => {
    menu.classList.remove("menu-open")
    fadeOut(menuOverlay)
}

const MobileMenu = () => {
    menuIcon.addEventListener("click", () => {
        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay, "flex")

            setTimeout(() => {
                menu.classList.add("menu-open")
            }, transitionGap)
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
            if (window.innerWidth <= 992) {
                closeMenu()
            }
        })
    })
}

export default MobileMenu