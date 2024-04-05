export const layoutMobile = 375
export const layouDesktop = 1440

export const breakPointMobile = 480
export const breakPointMobileLandscape = 600
export const breakPointTablet = 768
export const breakPointTabletLandscape = 900
export const breakPointDesktopSD = 1024
export const breakPointDesktopHD1 = 1366
export const breakPointDesktopHD2 = 1440
export const breakPointDesktopFHD = 1920

export const isVisible = (element) => window.getComputedStyle(element).display !== "none"

export const transitionDuration = 300
export const transitionGap = 10

export const normalArray = (array) => {
    let newArray = []
    array.forEach(item => newArray.push(item))
    return newArray
}