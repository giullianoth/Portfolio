import { fadeIn, fadeOut } from "./effects.js"

const modal = [...document.querySelectorAll(".j_modal")],
    openModal = [...document.querySelectorAll(".j_open_modal")]

const closeBtn = () => {
    let btn = document.createElement("div")
    let icon = document.createElement("span")
    btn.className = "close"
    btn.setAttribute("title", "Fechar")
    btn.append(icon)
    return btn
}

export default function Modal() {
    openModal.forEach(btn => {
        btn.addEventListener("click", ({ target }) => {
            let modalTarget = target.dataset.target
            let modalToOpen = modal.find(item => item.id === modalTarget)
            let close = closeBtn()
            
            fadeIn(modalToOpen)
            modalToOpen.append(close)

            close.addEventListener("click", () => fadeOut(modalToOpen))
        })
    })
}