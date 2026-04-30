const body = document.body

/**
 * Blocks or unblocks the document scroll when a modal is open.
 * @param {boolean} shouldDisable Indicates if the document scroll will disable or not
 */
const ToggleBlockScroll = (shouldDisable) => {
    if (shouldDisable) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)
        body.classList.add("no-scroll")
    } else {
        body.classList.remove("no-scroll")
        body.style.removeProperty("--scrollbar-width")
    }
}

export default ToggleBlockScroll