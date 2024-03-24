export const isVisible = (element) => window.getComputedStyle(element).display !== "none"

export const transitionDuration = 300
export const transitionGap = 10

export const normalArray = (array) => {
    let newArray = []
    array.forEach(item => newArray.push(item))
    return newArray
}