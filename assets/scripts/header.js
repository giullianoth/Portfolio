const header = document.querySelector(".j_header")

const changeHeader = () => {
    if (window.scrollY >= header.offsetHeight) {
        header.classList.add("scrolling")
    } else {
        header.classList.remove("scrolling")
    }
}

export default function FixedHeader() {
    changeHeader()
    window.addEventListener("scroll", changeHeader)
}