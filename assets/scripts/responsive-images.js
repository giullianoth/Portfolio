import { normalArray } from "./variables.js"

const images = normalArray(document.querySelectorAll(".j_responsive_image"))
const imagePath = (img) => img.src
const fragmentedPath = (img) => imagePath(img).split("/")
const imageMobile = (img) => fragmentedPath(img).slice(-1).toString()
const imageTablet = (img) => fragmentedPath(img).slice(-1).toString().replace("mobile", "tablet")
const imageDesktop = (img) => fragmentedPath(img).slice(-1).toString().replace("mobile", "desktop")
const makePath = (img, name) => fragmentedPath(img).toSpliced(6, 1, name).join("/")

const pictureElement = () => {
    
}

export default function ResponsiveImages() {
    images.forEach(img => {
        console.log(img);
    })
}