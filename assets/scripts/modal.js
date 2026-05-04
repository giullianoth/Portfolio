import { fadeIn, fadeOut } from "./effects.js"
import ToggleBlockScroll from "./scroll.js"

const modal = document.querySelector(".j_modal")
const modalContent = modal.querySelector(".j_modal_content")
const modalClose = document.querySelectorAll(".j_modal_close")
const modalTriggers = document.querySelectorAll(".j_open_modal")

let lastFocusedElement

/**
 * Controller of the modal element.
 * @param {string} content The inner HTML of modal
 * @param {boolean} fixedHeight Defines if the modal is scrollable or not
 * @returns {void}
 */
const Modal = (content, fixedHeight = false) => {
    if (!modal) {
        return console.warn("Warning: no modal element found with the class 'j_modal'")
    }

    fixedHeight
        ? modalContent.classList.add("fixed-height")
        : modalContent.classList.remove("fixed-height")

    modalContent.innerHTML = content
    lastFocusedElement = document.activeElement
    ToggleBlockScroll(true)

    fadeIn(modal, "flex", () => {
        modal.removeAttribute("inert")
        modal.removeAttribute("aria-hidden")
        modal.querySelector(".j_modal_close").focus()
    })

    modalClose.forEach(button => {
        button.addEventListener("click", event => {
            const isClickedInsideModal = event.target.closest(".j_modal_container")

            if (event.target.classList.contains("j_modal_close") && !isClickedInsideModal
                || event.currentTarget.classList.contains("j_modal_close_button")) {

                if (document.activeElement) {
                    document.activeElement.blur()
                }

                ToggleBlockScroll(false)

                fadeOut(modal, false, () => {
                    modalContent.innerHTML = ""
                    modal.setAttribute("inert", "")
                    modal.setAttribute("aria-hidden", true)
                    lastFocusedElement?.focus()
                })
            }
        }, { once: true })
    })

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.hasAttribute("aria-hidden")) {
            modal.querySelector(".j_modal_close").click()
        }
    })
}

export default Modal