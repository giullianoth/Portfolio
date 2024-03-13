import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon"),
    menuOverlay = document.querySelector(".j_menu_overlay"),
    menuWrapper = document.querySelector(".j_menu_wrapper")

export default function menuCollapse() {
    window.addEventListener("resize", ({ target }) => {
        if (target.innerWidth >= 900) {
            menuIcon.classList.remove("active")
            menuWrapper.classList.remove("active")
        }
    })

    menuIcon.addEventListener("click", () => {

        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay, "flex")

            setTimeout(() => {
                menuIcon.classList.add("active")
                menuWrapper.classList.add("active")
            }, transitionGap)
        } else {
            fadeOut(menuOverlay)
            menuIcon.classList.remove("active")
            menuWrapper.classList.remove("active")
        }
    })

    menuOverlay.addEventListener("click", ({ target }) => {
        if (isVisible(menuOverlay) && target.classList.contains("j_menu_overlay") && menuIcon.classList.contains("active") && menuWrapper.classList.contains("active")) {
            fadeOut(menuOverlay)
            menuIcon.classList.remove("active")
            menuWrapper.classList.remove("active")
        }
    })
}