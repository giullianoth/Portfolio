// LAYOUT AND BREAKPOINTS
export const breakpointExtraSmall = 375
export const breakpointSmall = 576
export const breakpointMedium = 768
export const breakpointLarge = 992
export const breakpointExtraLarge = 1024
export const breakpointXXLarge = 1200

// DOM

/**
 * Checks if an element is visible in viewport.
 * @param {HTMLElement} element The DOM element that will be checked
 * @returns {boolean}
 */
export const isVisible = element => window.getComputedStyle(element).display !== "none"

// TRANSITIONS & ANIMATIONS
export const transitionDuration = 300
export const transitionGap = 10

// CHARACTERS
export const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const textTags = /(<([^>]+)>)/ig

// VALIDATION

/**
 * Checks if the provided email is a vaild email.
 * @param {string} email The email value
 * @returns {boolean}
 */
export const validateEmail = email => emailPattern.test(email)

/**
 * Removes all possible html tags from a specified text.
 * @param {string} str The text value
 * @returns {string}
 */
export const stripTags = str => str.replace(textTags, "")

// LOADER ANIMATION
export const loader = "<div class=\"th-load j_loader\"><div></div><div></div><div></div><div></div></div>"

/**
 * Gets the loader DOM element.
 * @returns {HTMLDivElement}
 */
export const loaderDOM = () => document.querySelector(".j_loader")