// LAYOUT AND BREAKPOINTS
export const layoutMobile = 375
export const layouDesktop = 1440

export const breakPointMobile = 480
export const breakPointMobileLandscape = 600
export const breakPointTablet = 768
export const breakPointTabletLandscape = 900
export const breakPointDesktopSD = 1024
export const breakPointDesktopHD1 = 1366
export const breakPointDesktopHD2 = layouDesktop
export const breakPointDesktopFHD = 1920

export const isVisible = (element) => window.getComputedStyle(element).display !== "none"

export const publicKey = "5AVwJAPL4qqDOEAk_"
export const serviceID = "service_cu4ln3h"
export const templateID = "template_wkh5a4s"

export const transitionDuration = 300
export const transitionGap = 10

export const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const textTags = /(<([^>]+)>)/ig

export const validateEmail = (email) => emailPattern.test(email)
export const stripTags = (str) => str.replace(textTags, "")

export const loader = "<l-trio size=\"16\" speed=\"1.3\" color=\"white\"></l-trio>"
export const loaderElement = () => document.querySelector(".j_loader")

export const normalArray = (array) => {
    let newArray = []
    array.forEach(item => newArray.push(item))
    return newArray
}