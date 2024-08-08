const header = document.querySelector(".j_header"),
    changeHeader = () => window.scrollY >= header.offsetHeight * 2 ? header.classList.add("scrolling") : header.classList.remove("scrolling")

export default function FixedHeader() {
    changeHeader()
    window.addEventListener("scroll", changeHeader)
}