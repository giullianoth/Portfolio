import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon"),
    menuOverlay = document.querySelector(".j_menu_overlay"),
    menuContainer = document.querySelector(".j_menu_container")

export default function menuCollapse() {
    window.addEventListener("resize", ({ target }) => {
        if (target.innerWidth >= 900) {
            menuIcon.classList.remove("active")
            menuContainer.classList.remove("active")
            menuOverlay.style.display = ""
        }
    })

    menuIcon.addEventListener("click", () => {

        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay, "flex")

            setTimeout(() => {
                menuIcon.classList.add("active")
                menuContainer.classList.add("active")
            }, transitionGap)
        } else {
            fadeOut(menuOverlay)
            menuIcon.classList.remove("active")
            menuContainer.classList.remove("active")
        }
    })

    menuOverlay.addEventListener("click", ({ target }) => {
        if (isVisible(menuOverlay) && target.classList.contains("j_menu_overlay") && menuIcon.classList.contains("active") && menuContainer.classList.contains("active")) {
            fadeOut(menuOverlay)
            menuIcon.classList.remove("active")
            menuContainer.classList.remove("active")
        }
    })
}