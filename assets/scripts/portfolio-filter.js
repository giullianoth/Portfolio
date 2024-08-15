import { fadeIn, fadeOut } from "./effects.js"
import { transitionDuration } from "./variables.js"

const filter = document.querySelector(".j_portfolio_filter"),
    filterTabs = [...filter.querySelectorAll("li")],
    filterContainer = document.querySelector(".j_portfolio_filtered"),
    filterItems = [...filterContainer.querySelectorAll("article")]

export default function PortfolioFilter() {
    filterTabs.forEach((tab, i, arr) => {
        tab.addEventListener("click", () => {
            arr.forEach(item => item.classList.remove("active"))
            tab.classList.add("active")

            let category = (tab.innerText).toLowerCase()
            let filterGroup = category !== "todos"
                ? filterItems.filter(item => (item.dataset.category).toLowerCase() === category)
                : filterItems

            fadeOut(filterContainer)

            setTimeout(() => {
                filterContainer.innerHTML = ""

                if (filterGroup.length > 0) {
                    filterGroup.forEach(item => filterContainer.append(item))
                } else {
                    filterContainer.innerHTML = "<p class=\"empty-message\">Nenhum item para exibir</p>"
                }

                fadeIn(filterContainer, "flex")
            }, transitionDuration);

        })
    })
}