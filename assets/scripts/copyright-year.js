const yearField = document.querySelector(".j_copy_year")

export default function CopyYear() {
    yearField.innerText = new Date().getFullYear()
}