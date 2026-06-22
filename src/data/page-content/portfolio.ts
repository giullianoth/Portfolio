import { ContentByLanguage } from "@/types/language";

export const portfolioSubtitle: ContentByLanguage = {
    pt: "Meu portfólio",
    en: "My portfolio"
};

export const portfolioTitle: ContentByLanguage = {
    pt: "Estudos de caso em destaque",
    en: "Featured case studies"
};

export const portfolioTagline: ContentByLanguage = {
    pt: "Explore uma seleção de projetos onde aplico <strong>metodologias ágeis, design centrado no usuário e tecnologias modernas</strong>. Cada estudo de caso reflete meu compromisso em unir interfaces impactantes a códigos robustos e performáticos.",
    en: "Explore a selection of projects where I apply <strong>agile methodologies, user-centered design, and modern technologies</strong>. Each case study reflects my commitment to combining impactful interfaces with robust and high-performing code."
};

export const projectLabel = (projectName: string): ContentByLanguage => ({
    pt: `Projeto ${projectName}`,
    en: `${projectName} project`,
});

export const projectActionAriaLabel = (projectName: string): ContentByLanguage => ({
    pt: `Ver detalhes do projeto ${projectName}`,
    en: `View details of ${projectName} project`
});

export const projectActionLabel: ContentByLanguage = {
    pt: "Ver detalhes",
    en: "View details"
};

export const portfolioCtaTitle: ContentByLanguage = {
    pt: "Ver lista completa de projetos",
    en: "View full list of projects"
}

export const portfolioCtaLabel: ContentByLanguage = {
    pt: "Ver todos",
    en: "View all"
};

export const portfolioListTitle: ContentByLanguage = {
    pt: "Todos os projetos",
    en: "All projects"
};

export const portfolioEmptyLabel: ContentByLanguage = {
    pt: "Nenhum projeto para exibir.",
    en: "No project to show."
};