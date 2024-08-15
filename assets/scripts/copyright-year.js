const yearField = document.querySelector(".j_copyright_year")

export default function CopyYear() {
    yearField.innerText = new Date().getFullYear()
}