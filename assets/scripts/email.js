import { publicKey } from "./variables.js";

export default function EmailInitialize() {
    (function () {
        emailjs.init({
            publicKey: publicKey,
        })
    })()
}