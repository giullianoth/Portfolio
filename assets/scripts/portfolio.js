const containers = Array.from(document.querySelectorAll(".j_preview"))

const PortfolioImagePreview = () => {
    containers.forEach(container => {
        const imagePreview = container.querySelector(".j_image_preview picture")
        const height = imagePreview.offsetHeight
        container.style.setProperty("--preview-height", `${height}px`)
    })
}

export default PortfolioImagePreview