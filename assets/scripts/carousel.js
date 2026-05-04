const carouselList = Array.from(document.querySelectorAll(".j_carousel"))

/**
 * The group of a specified carousel
 * @param {HTMLDivElement} carouselElement The carousel DOM element
 * @returns {HTMLUListElement}
 */
const groupByCarousel = carouselElement => carouselElement.querySelector(".j_carousel_group")

/**
 * Carousel features.
 */
const Carousel = () => {
    carouselList.forEach(carousel => {
        const { direction, duration } = carousel.dataset
        const carouselGroup = groupByCarousel(carousel)

        if (direction && !carouselGroup.classList.contains(direction)) {
            carouselGroup.classList.add(direction)
        }

        if (duration) {
            carouselGroup.style.animationDuration = duration
        }

        if (carousel.children.length === 1) {
            const carouselGroupClone = carouselGroup.cloneNode(true)
            carouselGroupClone.setAttribute("aria-hidden", true)

            if (direction === "left") {
                carousel.append(carouselGroupClone)
            }

            if (direction === "right") {
                carousel.prepend(carouselGroupClone)
            }
        }
    })
}

export default Carousel