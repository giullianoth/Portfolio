import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon"),
    menuOverlay = document.querySelector(".j_menu_overlay"),
    menuWrapper = document.querySelector(".j_menu_wrapper")

export default function menuCollapse() {
    menuIcon.addEventListener("click", () => {

        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay)

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
}