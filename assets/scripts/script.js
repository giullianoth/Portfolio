import Carousel from "./carousel.js"
import AddCopyrightYear from "./copyright-year.js"
import { HeaderBehavior } from "./header.js"
import MobileMenu from "./mobile-menu.js"
import Modal from "./modal.js"

MobileMenu()
HeaderBehavior()
Carousel()
AddCopyrightYear()
Modal()

window.addEventListener("scroll", () => {
    HeaderBehavior()
})

window.addEventListener("resize", () => {
    Carousel()
})