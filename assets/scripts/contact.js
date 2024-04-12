import { slideDown, slideUp } from "./effects.js"
import { loader, serviceID, stripTags, templateID, validateEmail } from "./variables.js"

const contactForm = document.querySelector(".j_contact_form")
const confirm = document.querySelector(".j_contact_confirm_message")
const buttonLoad = document.querySelector(".j_button_load")

const confirmElement = (text, valid = false) => {
    let element = document.createElement("p")
    element.className = valid ? "success" : "error"
    element.innerText = text
    return element
}

export default function Contact() {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const userName = contactForm.querySelector("#name").value
        const userEmail = contactForm.querySelector("#email").value
        const message = contactForm.querySelector("#message").value
        let confirmMessage = null
        let valid = false

        if (userName === "" || userEmail === "" || message === "") {
            confirmMessage = confirmElement("Preencha corretamente os dados")
        } else if (!validateEmail(userEmail)) {
            confirmMessage = confirmElement("Endereço de e-mail inválido")
        } else {
            valid = true
        }

        buttonLoad.innerHTML = loader

        if (valid) {
            let params = {
                userName: stripTags(userName),
                userEmail: stripTags(userEmail),
                message: stripTags(message)
            }

            await emailjs.send(serviceID, templateID, params).then(
                (response) => {
                    if (response.status === 200) {
                        confirmMessage = confirmElement("Obrigado! Sua mensagem foi enviada. Responderei em até 24 horas!", valid)
                    }
                },
                (error) => {
                    if (error.status !== 200) {
                        confirmMessage = confirmElement("Algo deu errado ao enviar sua mensagem")
                    }
                },
            ).finally(() => {
                confirm.append(confirmMessage)
                slideDown(confirmMessage)
                buttonLoad.innerText = "Enviar"

                setTimeout(() => {
                    slideUp(confirmMessage, true)
                }, 4000)
            })
        } else {
            confirm.append(confirmMessage)
            slideDown(confirmMessage)
            buttonLoad.innerText = "Enviar"

            setTimeout(() => {
                slideUp(confirmMessage, true)
            }, 4000)
        }
    })
}