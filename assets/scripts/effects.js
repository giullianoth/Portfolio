const transitionDuration = 300
const transitionGap = 10

/**
 * Default values for the CSS transition attribute.
 * @param {string} property Attributes that will be affected
 * @param {string} duration Duration of transition, in seconds
 * @param {string} timingFunction The type of function that transition will run
 * @param {string} delay Duration of delay before transition
 * @returns {string}
 */
const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

/**
 * Applies the slide down effect to an element.
 * @param {HTMLElement} element The DOM element to apply the effect
 * @param {string} displayElement Display mode for the element
 * @param {(() => void) | undefined} callback The function that will run after the effect
 */
export function slideDown(element, displayElement = "block", callback = undefined) {
    element.style.transition = ""
    element.style.display = displayElement

    let maxHeight = element.offsetHeight

    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.transition = transitionProps()
        element.style.maxHeight = `${maxHeight}px`
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""

        setTimeout(() => {
            element.style.overflow = ""
            element.style.transition = ""

            if (callback) {
                callback()
            }
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

/**
 * Applies the slide up effect to an element.
 * @param {HTMLElement} element The DOM element to apply the effect
 * @param {boolean} removeElement Indicates if the element will be removed after the effect
 * @param {(() => void) | undefined} callback The function that will run after the effect
 */
export function slideUp(element, removeElement = false, callback = undefined) {
    element.style.transition = transitionProps()
    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.maxHeight = ""
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""
        element.style.overflow = ""
        element.style.transition = ""
        removeElement && element.remove()

        if (callback) {
            callback()
        }
    }, transitionDuration)
}

/**
 * Applies the fade in effect to an element.
 * @param {HTMLElement} element The DOM element to apply the effect
 * @param {string} displayElement Display mode for the element
 * @param {(() => void) | undefined} callback The function that will run after the effect
 */
export function fadeIn(element, displayElement = "block", callback = undefined) {
    element.style.transition = transitionProps()
    element.style.opacity = 0
    element.style.display = displayElement

    setTimeout(() => {
        element.style.opacity = ""

        setTimeout(() => {
            element.style.transition = ""

            if (callback) {
                callback()
            }
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

/**
 * Applies the fade out effect to an element.
 * @param {HTMLElement} element The DOM element to apply the effect
 * @param {boolean} removeElement Indicates if the element will be removed after the effect
 * @param {(() => void) | undefined} callback The function that will run after the effect
 */
export function fadeOut(element, removeElement = false, callback = undefined) {
    element.style.transition = transitionProps()
    element.style.opacity = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.opacity = ""
        element.style.transition = ""
        removeElement && element.remove()

        if (callback) {
            callback()
        }
    }, transitionDuration)
}