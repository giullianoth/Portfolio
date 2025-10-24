import { HeaderBehavior, LogoRedirect } from "./header.js"
import MobileMenu from "./mobile-menu.js"

MobileMenu()
HeaderBehavior()
LogoRedirect()

window.addEventListener("scroll", () => {
    HeaderBehavior()
})