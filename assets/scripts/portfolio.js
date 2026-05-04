import Modal from "./modal.js"
import { breakpointLarge, breakpointSmall } from "./variables.js"
import portfolioData from "./portfolio.json" with { type: "json" }

const openPortfolioButton = document.querySelector(".j_open_portfolio")
const clickableProjects = document.querySelectorAll(".j_project")

/**
 * The HTML content of the portfolio
 */
const portfolioContent = `
    <div class="th-portfolio__list">
        ${portfolioData.map(item => `
            <article class="th-portfolio__project j_open_modal" role="region" aria-label="Projeto ${item.name}" data-project-id="${item.id}">
                <picture>
                    <source media="(min-width: ${breakpointLarge}px)" srcset="/assets/images/portfolio/${item.images.thumbDesktop}">
                    <source media="(min-width: ${breakpointSmall}px)" srcset="/assets/images/portfolio/${item.images.thumbTablet}">
                    <img src="/assets/images/portfolio/${item.images.thumbMobile}" alt="${item.images.alt}" loading="lazy" class="th-portfolio__project-image">
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
                    <button class="th-button clear" aria-label="Ver detalhes do projeto ${item.name}" data-id="${item.id}">
                        Ver detalhes
                    </button>
                </div>
            </article>
        `).join("")}
    </div>
`

/**
 * The HTML content of a specified project
 * @param {{
 *  id: number,
 *  name: string,
 *  description: string,
 *  featured: boolean,
 *  tech: string[],
 *  images: {
 *      thumbDesktop: string,
 *      thumbTablet: string,
 *      thumbMobile: string,
 *      desktop: string,
 *      tablet: string,
 *      mobile: string,
 *      alt: string,
 *  },
 *  caseStydy: string,
 *  repositoryUrl: string,
 *  deployUrl: string,
 * }} project The project data
 * @returns {string}
 */
const projectContent = project => `
    <article class="th-portfolio__expanded-project">
        <div class="th-portfolio__expanded-content">
            <figure class="th-portfolio__expanded-image">
                <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" aria-label="Acessar o site do ${project.name}">
                    <picture>
                        <source media="(min-width: ${breakpointLarge}px)" srcset="/assets/images/portfolio/${project.images.desktop}">
                        <source media="(min-width: ${breakpointSmall}px)" srcset="/assets/images/portfolio/${project.images.tablet}">
                        <img src="/assets/images/portfolio/${project.images.mobile}" alt="${project.images.alt}">
                    </picture>
                </a>
            </figure>
            <div class="th-portfolio__expanded-info">
                <div class="th-portfolio__expanded-text th-text-wrapper">
                    <header class="th-portfolio__expanded-title">
                        <h2>${project.name}</h2>
                    </header>
                    <p class="th-portfolio__expanded-stacks">
                        <em>${project.tech.join(", ")}</em>
                    </p>
                    ${project.caseStudy}
                </div>
            </div>
        </div>
        <footer class="th-portfolio__expanded-actions outside">
            <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear">
                <i class="fa-solid fa-display"></i>
                Deploy
            </a>
            <a href="${project.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear">
                <i class="fa-solid fa-code"></i>
                Repositório
            </a>
        </footer>
    </article>
`

/**
 * Arranges the portfolio items on a modal screen.
 */
const LoadPortfolio = () => {
    openPortfolioButton.addEventListener("click", () => {
        Modal(portfolioContent)
    })

    clickableProjects.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const projectId = parseInt(trigger.dataset.id)
            const project = portfolioData.find(data => projectId === data.id)

            if (!project) {
                return console.warn("No project found.")
            }

            Modal(projectContent(project), true)
        })
    })
}

export default LoadPortfolio