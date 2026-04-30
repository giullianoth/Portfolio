import portfolioData from "./portfolio.json" with { type: "json" }

const modalContent = document.querySelector(".j_modal_content")
const openPortfolioButton = document.querySelector(".j_open_portfolio")

const portfolioContent = `
    <div class="th-portfolio__list">
        ${portfolioData.map(item => `
            <article class="th-portfolio__project j_open_modal" role="region" aria-label="Projeto ${item.name}" data-project-id="${item.id}">
                <picture>
                    <source media="(min-width: 992px)" srcset="/assets/images/portfolio/${item.images.desktop}">
                    <source media="(min-width: 576px)" srcset="/assets/images/portfolio/${item.images.tablet}">
                    <img src="/assets/images/portfolio/${item.images.mobile}" alt="${item.images.alt}" loading="lazy" class="th-portfolio__project-image">
                </picture>

                <div class="th-portfolio__project-info">
                    <header class="th-portfolio__project-name">
                        <h3>${item.name}</h3>
                    </header>

                    <p class="th-portfolio__project-description">
                        ${item.description}
                    </p>

                    <p class="th-portfolio__project-type">
                        <strong>Tech:</strong> ${item.tech.join(", ")}
                    </p>

                    <button class="th-button clear" aria-label="Ver detalhes do projeto ${item.name}" data-project-id="${item.id}">
                        Ver detalhes
                    </button>
                </div>
            </article>
        `)}
    </div>
`

/**
 * Arranges the portfolio items on a modal screen.
 */
const LoadPortfolio = () => {
    openPortfolioButton.addEventListener("click", () => {
        modalContent.innerHTML = portfolioContent
    })
}

export default LoadPortfolio