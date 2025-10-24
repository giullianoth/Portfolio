const carouselList = Array.from(document.querySelectorAll(".j_carousel"))
const groupByCarousel = carouselElement => carouselElement.querySelector(".j_carousel_group")

const Carousel = () => {
    carouselList.forEach(carousel => {
        const { direction } = carousel.dataset
        const carouselGroup = groupByCarousel(carousel)

        carouselGroup.classList.add(direction)

        const carouselGroupClone = carouselGroup.cloneNode(true)
        
        carouselGroupClone.setAttribute("aria-hidden", true)
        
        if (direction === "left") {
            carousel.append(carouselGroupClone)
        }

        if (direction === "right") {
            carousel.prepend(carouselGroupClone)
        }
    })
}

export default Carousel