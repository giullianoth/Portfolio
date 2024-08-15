import { fadeIn, fadeOut } from "./effects.js"
import { isVisible, transitionGap } from "./variables.js"

const menuIcon = document.querySelector(".j_menu_icon"),
    menuOverlay = document.querySelector(".j_menu_overlay"),
    menuContainer = document.querySelector(".j_menu_container"),
    menuItems = menuContainer.querySelectorAll(".j_menu_item"),
    touchable = document.querySelector(".j_touchable")

export default function menuCollapse() {
    window.addEventListener("resize", ({ target }) => {
        if (target.innerWidth >= 992) {
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

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                fadeOut(menuOverlay)
                menuIcon.classList.remove("active")
                menuContainer.classList.remove("active")
            }
        })
    })

    /*touchable.addEventListener("touchmove", (event) => {
        if (window.innerWidth < 992) {
            touchable.style.transition = "unset"
            touchable.style.transform = `translateX(${event.touches[0].clientX}px)`
        }
    })

    touchable.addEventListener("touchend", () => {
        if (window.innerWidth < 992) {
            let positionLeft = Number(window.getComputedStyle(touchable).transform.substring(7, window.getComputedStyle(touchable).transform.indexOf(")")).split(", ")[4])

            touchable.style.transition = ""
            touchable.style.transform = ""

            if (positionLeft > touchable.offsetWidth / 4) {
                fadeOut(menuOverlay)
                menuIcon.classList.remove("active")
                menuContainer.classList.remove("active")
            }
        }
    })*/
}