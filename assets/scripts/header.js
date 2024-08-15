const header = document.querySelector(".j_header"),
    back = document.querySelector(".j_back")

const changeHeader = () => {
    if (window.scrollY >= header.offsetHeight * 2) {
        header.classList.add("scrolling")
        back.classList.add("show")
    } else {
        header.classList.remove("scrolling")
        back.classList.remove("show")
    }
}

export default function FixedHeader() {
    changeHeader()
    window.addEventListener("scroll", changeHeader)
}