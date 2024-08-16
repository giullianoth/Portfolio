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

// DOM
export const isVisible = (element) => window.getComputedStyle(element).display !== "none"

// EMAIL JS
export const publicKey = "5AVwJAPL4qqDOEAk_"
export const serviceID = "service_cu4ln3h"
export const templateID = "template_wkh5a4s"

// TRANSITIONS & ANIMATIONS
export const transitionDuration = 300
export const transitionGap = 10

// CHARACTERS
export const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const textTags = /(<([^>]+)>)/ig

// VALIDATION
export const validateEmail = (email) => emailPattern.test(email)
export const stripTags = (str) => str.replace(textTags, "")

// LOADER ANIMATION
export const loader = "<div class=\"th-load j_loader\"><div></div><div></div><div></div><div></div></div>"
export const loaderElement = () => document.querySelector(".j_loader")