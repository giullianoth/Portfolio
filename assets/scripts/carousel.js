const carouselList = Array.from(document.querySelectorAll(".j_carousel"))
const groupByCarousel = carouselElement => carouselElement.querySelector(".j_carousel_group")

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