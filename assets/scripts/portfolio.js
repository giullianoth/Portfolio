import Modal from "./modal.js"
import { breakpointLarge, breakpointSmall } from "./variables.js"
import portfolioData from "./portfolio.json" with { type: "json" }

const openPortfolioButton = document.querySelector(".j_open_portfolio")
const clickableProjects = document.querySelectorAll(".j_project")
const projectsInModal = () => document.querySelectorAll(".j_modal .j_project")
const backButton = () => document.querySelector(".j_portfolio_back")

const translatedProjects = lang => portfolioData[lang]

/**
 * The HTML content of the portfolio
 * @param {string} lang The selected language
 * @returns {string}
 */
const portfolioContent = (lang = "pt") => {
    const portfolioTitle = {
        pt: "Todos os projetos",
        en: "All projects"
    }

    const projectAriaLabel = (projectName) => ({
        pt: `Projeto ${projectName}`,
        en: `${projectName} project`
    })

    const actionAriaLabel = (projectName) => ({
        pt: `Ver detalhes do projeto ${projectName}`,
        en: `View details of ${projectName} project`
    })

    const buttonLabel = {
        pt: "Ver detalhes",
        en: "View details"
    }

    return `
        <header class="th-heading">
            <h2>${portfolioTitle[lang]}</h2>
        </header>
        <div class="th-portfolio__list">
            ${translatedProjects(lang).map(item => `
                <article class="th-portfolio__project j_open_modal j_project" role="region" aria-label="${projectAriaLabel(item.name)[lang]}" data-id="${item.id}" data-lang="${lang}">
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
                        <button class="th-button clear" aria-label="${actionAriaLabel(item.name)[lang]}" data-id="${item.id}">
                            ${buttonLabel[lang]}
                        </button>
                    </div>
                </article>
            `).join("")}
        </div>
    `
}

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
 * @param {boolean} shouldGoBack Indicates if shoult have a button to go back to portfolio
 * @param {string} lang The selected language
 * @returns {string}
 */
const projectContent = (project, shouldGoBack = false, lang = "pt") => {
    const imageAriaLabel = {
        pt: `Acessar o site do ${project.name}`,
        en: `Access ${project.name} site`
    }

    const repositoryButtonLabel = {
        pt: "Repositório",
        en: "Repository"
    }

    const backButtonLabel = {
        pt: "Voltar",
        en: "Back"
    }

    return `
        <article class="th-portfolio__expanded-project">
            <div class="th-portfolio__expanded-content">
                <figure class="th-portfolio__expanded-image">
                    <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" aria-label="${imageAriaLabel[lang]}">
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
            <footer class="th-portfolio__expanded-actions">
                <a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear">
                    <i class="fa-solid fa-display"></i>
                    Deploy
                </a>
                <a href="${project.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear">
                    <i class="fa-solid fa-code"></i>
                    ${repositoryButtonLabel[lang]}
                </a>
                ${shouldGoBack
                    ? `
                        <button class="th-button clear j_portfolio_back">
                            <i class="fa-solid fa-circle-chevron-left"></i>
                            ${backButtonLabel[lang]}
                        </button>    
                    `
                    : ""}
            </footer>
        </article>
    `
}

const openProject = (modalBody, shouldGoBack = false) => {
    modalBody.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const lang = trigger.dataset.lang || "pt"
            const projectId = parseInt(trigger.dataset.id)
            const project = translatedProjects(lang).find(data => projectId === data.id)

            if (!project) {
                return console.warn("No project found.")
            }

            Modal(projectContent(project, shouldGoBack, lang), true)

            if (shouldGoBack) {
                backButton().addEventListener("click", () => {
                    Modal(portfolioContent(lang))
                    openProject(projectsInModal(), true)
                })
            }
        })
    })
}

/**
 * Arranges the portfolio items on a modal window.
 */
const LoadPortfolio = () => {
    openProject(clickableProjects)

    openPortfolioButton.addEventListener("click", () => {
        const lang = openPortfolioButton.dataset.lang || "pt"
        Modal(portfolioContent(lang))
        openProject(projectsInModal(), true)
    })
}

export default LoadPortfolio