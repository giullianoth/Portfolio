import { fadeIn, fadeOut } from "./effects.js"

const modalElements = Array.from(document.querySelectorAll(".j_modal"))
const modalTriggers = Array.from(document.querySelectorAll(".j_open_modal"))
const modalTriggersClose = Array.from(document.querySelectorAll(".j_close_modal"))

const isVisible = element => window.getComputedStyle(element).display !== "none"

const Modal = () => {
    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const checkOpenModal = modalElements.find(element => isVisible(element))

            if (checkOpenModal) {
                fadeOut(checkOpenModal)
            }

            const { target } = trigger.dataset
            const modal = modalElements.find(element => element.id === target)

            
            if (!modal) {
                return
            }

            fadeIn(modal)
        })
    })

    modalTriggersClose.forEach(trigger => {
        trigger.addEventListener("click", ({ target }) => {
            if (!target.classList.contains("j_close_modal")) {
                return
            }

            const modal = modalElements.find(element => isVisible(element))

            if (!modal) {
                return
            }

            fadeOut(modal)
        })
    })
}

export default Modal