// import e from"./portfolio.json"with{type:"json"}
import portfolioData from "./portfolio.json"
// VARIABLES
const breakpointExtraSmall = 375
const breakpointSmall = 576
const breakpointMedium = 768
const breakpointLarge = 992
const breakpointExtraLarge = 1024
const breakpointXXLarge = 1200

const isVisible = element => window.getComputedStyle(element).display !== "none"

const transitionDuration = 300
const transitionGap = 10

const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

const body = document.body

const modal = document.querySelector(".j_modal")
const modalContent = modal.querySelector(".j_modal_content")
const modalClose = document.querySelectorAll(".j_modal_close")
const modalTriggers = document.querySelectorAll(".j_open_modal")

let lastFocusedElement

const menuIcon = document.querySelector(".j_menu_icon")
const menu = document.querySelector(".j_menu")
const menuOverlay = document.querySelector(".j_menu_overlay")
const menuLinks = Array.from(menuOverlay.querySelectorAll("a"))
const header = () => document.querySelector(".j_header")

const carouselList = Array.from(document.querySelectorAll(".j_carousel"))
const groupByCarousel = carouselElement => carouselElement.querySelector(".j_carousel_group")

const copyYearField = document.querySelector(".j_copy_year")

const openPortfolioButton = document.querySelector(".j_open_portfolio")
const clickableProjects = document.querySelectorAll(".j_project")
const projectsInModal = () => document.querySelectorAll(".j_modal .j_project")
const backButton = () => document.querySelector(".j_portfolio_back")
const translatedProjects = lang => portfolioData[lang]

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

    return `<header class="th-heading"><h2>${portfolioTitle[lang]}</h2></header><div class="th-portfolio__list">${translatedProjects(lang).map(item => `<article class="th-portfolio__project j_open_modal j_project" role="region" aria-label="${projectAriaLabel(item.name)[lang]}" data-id="${item.id}" data-lang="${lang}"><picture><source media="(min-width: ${breakpointLarge}px)" srcset="/assets/images/portfolio/${item.images.thumbDesktop}"><source media="(min-width: ${breakpointSmall}px)" srcset="/assets/images/portfolio/${item.images.thumbTablet}"><img src="/assets/images/portfolio/${item.images.thumbMobile}" alt="${item.images.alt}" loading="lazy" class="th-portfolio__project-image"></picture><div class="th-portfolio__project-info"><header class="th-portfolio__project-name"><h3>${item.name}</h3></header><p class="th-portfolio__project-description">${item.description}</p><p class="th-portfolio__project-type"><strong>Tech:</strong> ${item.tech.join(", ")}</p><button class="th-button clear" aria-label="${actionAriaLabel(item.name)[lang]}" data-id="${item.id}">${buttonLabel[lang]}</button></div></article>`).join("")}</div>`
}

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

    return `<article class="th-portfolio__expanded-project"><div class="th-portfolio__expanded-content"><figure class="th-portfolio__expanded-image"><a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" aria-label="${imageAriaLabel[lang]}"><picture><source media="(min-width: ${breakpointLarge}px)" srcset="/assets/images/portfolio/${project.images.desktop}"><source media="(min-width: ${breakpointSmall}px)" srcset="/assets/images/portfolio/${project.images.tablet}"><img src="/assets/images/portfolio/${project.images.mobile}" alt="${project.images.alt}"></picture></a></figure><div class="th-portfolio__expanded-info"><div class="th-portfolio__expanded-text th-text-wrapper"><header class="th-portfolio__expanded-title"><h2>${project.name}</h2></header><p class="th-portfolio__expanded-stacks"><em>${project.tech.join(", ")}</em></p>${project.caseStudy}</div></div></div><footer class="th-portfolio__expanded-actions"><a href="${project.deployUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear"><i class="fa-solid fa-display"></i>Deploy</a><a href="${project.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="th-button clear"><i class="fa-solid fa-code"></i>${repositoryButtonLabel[lang]}</a>${shouldGoBack ? `<button class="th-button clear j_portfolio_back"><i class="fa-solid fa-circle-chevron-left"></i>${backButtonLabel[lang]}</button>` : ""}</footer></article>`
}

const termsLink = document.querySelector(".j_open_terms")

const termsContent = ({
    pt: `<section><header class="th-heading"><h2>Privacidade & Termos de Uso</h2></header><div class="th-text-wrapper"><h3>1. Transparência e Dados</h3><p>Este site é um portfólio profissional. A coleta de dados ocorre de forma mínima e apenas nos seguintes cenários:</p><ul><li><strong>Formulário de Contato:</strong> Ao enviar uma mensagem, os dados (Nome e E-mail) são utilizados exclusivamente para responder à sua solicitação profissional.</li><li><strong>Analytics:</strong> Podemos utilizar ferramentas de análise (como Google Analytics) para entender o volume de visitas e melhorar a experiência de navegação através de cookies anônimos.</li></ul><h3>2. Uso de Imagens e Propriedade Intelectual</h3><p>Todo o conteúdo, design e código-fonte deste portfólio são de propriedade de <strong>Giulliano Guimarães</strong>, exceto onde indicado o contrário (como logos de empresas clientes ou tecnologias de terceiros).</p><p>A reprodução total ou parcial para fins comerciais sem autorização prévia é proibida.</p><h3>3. Responsabilidade</h3><p>Os links externos (para redes sociais ou projetos em produção) possuem suas próprias políticas de privacidade. Não me responsabilizo pelo conteúdo ou práticas de sites de terceiros.</p><h3>4. Seus Direitos</h3><p>De acordo com a <strong><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei Geral de Proteção de Dados Pessoais (LGPD)</a></strong>, você tem o direito de solicitar a exclusão de qualquer dado enviado através do formulário de contato a qualquer momento. Para isso, basta entrar em contato através do e-mail disponível na seção de contato.</p></div></section>`,
    en: `<section><header class="th-heading"><h2>Privacy & Terms of Use</h2></header><div class="th-text-wrapper"><h3>1. Transparency and Data</h3><p>This website is a professional portfolio. Data collection occurs minimally and only in the following scenarios:</p><ul><li><strong>Contact Form:</strong> When you send a message, the data (Name and Email) is used exclusively to respond to your professional request.</li><li><strong>Analytics:</strong> We can use analytics tools (such as Google Analytics) to understand the volume of visits and improve the browsing experience through anonymous cookies.</li></ul><h3>2. Use of Images and Intellectual Property</h3><p>All content, design, and source code in this portfolio are the property of <strong>Giulliano Guimarães</strong>, except where otherwise indicated (such as client company logos or third-party technologies).</p><p>Total or partial reproduction for commercial purposes without prior authorization is prohibited.</p><h3>3. Responsability</h3><p>External links (to social media or projects in production) have their own privacy policies. I am not responsible for the content or practices of third-party websites.</p><h3>4. Your Rights</h3><p>According to the <strong><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Brazilian General Data Protection Law (LGPD)</a></strong>, you have the right to request the deletion of any data submitted through the contact form at any time. To do so, simply contact us via the email address available in the contact section.</p></div></section>`
})

// FUNCTIONS

function slideDown(element, displayElement = "block", callback = undefined) {
    element.style.transition = ""
    element.style.display = displayElement

    let maxHeight = element.offsetHeight

    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.transition = transitionProps()
        element.style.maxHeight = `${maxHeight}px`
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""

        setTimeout(() => {
            element.style.overflow = ""
            element.style.transition = ""

            if (callback) {
                callback()
            }
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

function slideUp(element, removeElement = false, callback = undefined) {
    element.style.transition = transitionProps()
    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.maxHeight = ""
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""
        element.style.overflow = ""
        element.style.transition = ""
        removeElement && element.remove()

        if (callback) {
            callback()
        }
    }, transitionDuration)
}

function fadeIn(element, displayElement = "block", callback = undefined) {
    element.style.transition = transitionProps()
    element.style.opacity = 0
    element.style.display = displayElement

    setTimeout(() => {
        element.style.opacity = ""

        setTimeout(() => {
            element.style.transition = ""

            if (callback) {
                callback()
            }
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

function fadeOut(element, removeElement = false, callback = undefined) {
    element.style.transition = transitionProps()
    element.style.opacity = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.opacity = ""
        element.style.transition = ""
        removeElement && element.remove()

        if (callback) {
            callback()
        }
    }, transitionDuration)
}

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

const Modal = (content, fixedHeight = false) => {
    if (!modal) {
        return console.warn("Warning: no modal element found with the class 'j_modal'")
    }

    fixedHeight
        ? modalContent.classList.add("fixed-height")
        : modalContent.classList.remove("fixed-height")

    modalContent.innerHTML = content
    lastFocusedElement = document.activeElement
    ToggleBlockScroll(true)

    fadeIn(modal, "flex", () => {
        modal.removeAttribute("inert")
        modal.removeAttribute("aria-hidden")
        modal.querySelector(".j_modal_close").focus()
    })

    modalClose.forEach(button => {
        button.addEventListener("click", event => {
            const isClickedInsideModal = event.target.closest(".j_modal_container")

            if (event.target.classList.contains("j_modal_close") && !isClickedInsideModal
                || event.currentTarget.classList.contains("j_modal_close_button")) {

                if (document.activeElement) {
                    document.activeElement.blur()
                }

                ToggleBlockScroll(false)

                fadeOut(modal, false, () => {
                    modalContent.innerHTML = ""
                    modal.setAttribute("inert", "")
                    modal.setAttribute("aria-hidden", true)
                    lastFocusedElement?.focus()
                })
            }
        })
    })

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.hasAttribute("aria-hidden")) {
            modal.querySelector(".j_modal_close").click()
        }
    })
}

const closeMenu = () => {
    menu.classList.remove("menu-open")
    fadeOut(menuOverlay, false, () => {
        ToggleBlockScroll(false)
    })
}

const HeaderBehavior = () => {
    window.scrollY > 0
        ? header().classList.add("scrolling")
        : header().classList.remove("scrolling")
}

HeaderBehavior()

const Carousel = () => {
    carouselList.forEach(carousel => {
        const { direction, duration } = carousel.dataset
        const carouselGroup = groupByCarousel(carousel)

        if (direction && !carouselGroup.classList.contains(direction)) {
            carouselGroup.classList.add(direction)
        }

        if (duration) {
            carouselGroup.style.animationDuration = duration
        }

        if (carousel.children.length === 1) {
            const carouselGroupClone = carouselGroup.cloneNode(true)
            carouselGroupClone.setAttribute("aria-hidden", true)

            if (direction === "left") {
                carousel.append(carouselGroupClone)
            }

            if (direction === "right") {
                carousel.prepend(carouselGroupClone)
            }
        }
    })
}

Carousel()

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

// OTHER CODE
menuIcon.addEventListener("click", () => {
    if (!isVisible(menuOverlay)) {
        fadeIn(menuOverlay, "flex", () => {
            menu.classList.add("menu-open")
            ToggleBlockScroll(true)
        })
    } else {
        closeMenu()
    }
})

menuOverlay.addEventListener("click", ({ target }) => {
    if (target.classList.contains("j_close")) {
        closeMenu()
    }
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= breakpointLarge) {
            closeMenu()
        }
    })
})

copyYearField.innerText = new Date().getFullYear()

openProject(clickableProjects)

openPortfolioButton.addEventListener("click", () => {
    const lang = openPortfolioButton.dataset.lang || "pt"
    Modal(portfolioContent(lang))
    openProject(projectsInModal(), true)
})

termsLink.addEventListener("click", event => {
    event.preventDefault()
    const lang = termsLink.dataset.lang || "pt"
    Modal(termsContent[lang])
})

window.addEventListener("scroll", () => {
    HeaderBehavior()
})

window.addEventListener("resize", () => {
    Carousel()
})