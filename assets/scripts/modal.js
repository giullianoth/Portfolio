import { fadeIn, fadeOut } from "./effects.js";
import { isVisible, normalArray } from "./variables.js";

const modalTriggers = normalArray(document.querySelectorAll(".j_open_modal"))
const modalTarget = (trigger) => document.getElementById(trigger.dataset.modaltarget)
const closeModal = (modal) => modal.querySelector(".j_close_modal")
const activeModal = () => normalArray(document.querySelectorAll(".j_modal")).find(modal => isVisible(modal))

export default function Modal() {   

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            let modal = modalTarget(trigger)
            fadeIn(modal)            
            closeModal(modal).addEventListener("click", () => fadeOut(activeModal()))
        })
    })
}