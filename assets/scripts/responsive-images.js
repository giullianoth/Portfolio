import { breakPointDesktopSD, breakPointTablet, breakPointTabletLandscape, normalArray } from "./variables.js"

const images = normalArray(document.querySelectorAll(".j_responsive_image"))
const imagePath = (img) => img.src
const fragmentedPath = (img) => imagePath(img).split("/")
const imageMobile = (img) => fragmentedPath(img).slice(-1).toString()
const imageTablet = (img) => fragmentedPath(img).slice(-1).toString().replace("mobile", "tablet")
const imageDesktop = (img) => fragmentedPath(img).slice(-1).toString().replace("mobile", "desktop")
const makePath = (img, name) => fragmentedPath(img).toSpliced(fragmentedPath(img).length - 1, 1, name).join("/")

const pictureElement = (img) => {
    const picElement = document.createElement("picture")
    const sourceTablet = document.createElement("source")
    const sourceDesktop = document.createElement("source")

    sourceTablet.srcset = makePath(img, imageTablet(img))
    sourceTablet.media = `(min-width: ${breakPointTablet}px)`

    sourceDesktop.srcset = makePath(img, imageDesktop(img))
    sourceDesktop.media = `(min-width: ${breakPointTabletLandscape}px)`

    picElement.append(sourceDesktop)
    picElement.append(sourceTablet)

    return picElement
}

export default function ResponsiveImages() {
    images.forEach(img => {
        let picture = pictureElement(img)
        let imgParent = img.parentNode

        imgParent.insertBefore(picture, img)
        picture.append(img)
    })
}