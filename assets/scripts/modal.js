import { fadeIn, fadeOut } from "./effects.js";
import { isVisible, normalArray, transitionDuration } from "./variables.js";

const modalWindows = normalArray(document.querySelectorAll(".j_modal"))
const modalTriggers = normalArray(document.querySelectorAll(".j_open_modal"))
const modalContainer = (modal) => modal.querySelector(".j_modal_container")
const modalTarget = (trigger) => document.getElementById(trigger.dataset.modaltarget)
const closeModal = (modal) => modal.querySelector(".j_close_modal")
const activeModal = () => modalWindows.find(modal => isVisible(modal))

export default function Modal() {
    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {

            let modal = modalTarget(trigger)

            if (activeModal()) {
                fadeOut(modalContainer(activeModal()))

                setTimeout(() => {
                    let disabledModalContainer = activeModal()
                    disabledModalContainer.style.display = "none"
                    modal.style.display = "block"
                    fadeIn(modalContainer(modal))
                    modalContainer(disabledModalContainer).style.display = "block"
                }, transitionDuration)
            } else {
                fadeIn(modal)
            }

            closeModal(modal).addEventListener("click", () => fadeOut(modalTarget(closeModal(modal))))
        })
    })
}