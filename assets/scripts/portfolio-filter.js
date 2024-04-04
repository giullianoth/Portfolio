import { normalArray } from "./variables.js"

const portfolio = document.querySelector(".j_portfolio_with_filter")
const portfolioItems = normalArray(portfolio.querySelectorAll(".j_portfolio_item"))
const filteredSections = normalArray(document.querySelectorAll(".j_portfolio_filtered"))

const tags = (element) => (element.dataset.filter).split(", ")

const portfolioListElement = () => {
    let element = document.createElement("div")
    element.classList = "th-portfolio__list j_portfolio_filtered"
    return element
}

export default function PortfolioFilter() {

    filteredSections.forEach(section => {
        section.append(portfolioListElement())

        portfolioItems.forEach(item => {
            if (tags(item).some(tag => tags(section).includes(tag))) {
                let filterWrapper = section.querySelector(".j_portfolio_filtered")
                filterWrapper.append(item.cloneNode(true))
            }
        })
    })
}