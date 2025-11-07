import Carousel from "./carousel.js"
import AddCopyrightYear from "./copyright-year.js"
import { HeaderBehavior, LogoRedirect } from "./header.js"
import MobileMenu from "./mobile-menu.js"

MobileMenu()
HeaderBehavior()
LogoRedirect()
Carousel()
AddCopyrightYear()

window.addEventListener("scroll", () => {
    HeaderBehavior()
})

window.addEventListener("resize", () => {
    Carousel()
})