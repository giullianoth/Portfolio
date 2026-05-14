import Carousel from "./carousel.js"
import AddCopyrightYear from "./copyright-year.js"
import HeaderBehavior from "./header.js"
import MobileMenu from "./mobile-menu.js"
import LoadPortfolio from "./portfolio.js"
import Terms from "./terms.js"

MobileMenu()
HeaderBehavior()
Carousel()
AddCopyrightYear()
LoadPortfolio()
Terms()

window.addEventListener("scroll", () => {
    HeaderBehavior()
})

window.addEventListener("resize", () => {
    Carousel()
})