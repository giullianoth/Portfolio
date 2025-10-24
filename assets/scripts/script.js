import Carousel from "./carousel.js"
import { HeaderBehavior, LogoRedirect } from "./header.js"
import MobileMenu from "./mobile-menu.js"

MobileMenu()
HeaderBehavior()
LogoRedirect()
Carousel()

window.addEventListener("scroll", () => {
    HeaderBehavior()
})

window.addEventListener("resize", () => {
    Carousel()
})