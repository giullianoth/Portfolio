import { ContentByLanguage } from "@/types/language";

interface CtaContent {
    primary: ContentByLanguage;
    secondary: ContentByLanguage;
}

export const heroTitle: ContentByLanguage = {
    pt: "Onde o Design Estratégico encontra <span>Código de Alta Performance</span>",
    en: "Where Strategic Design Meet <span>High-Performance Code</span>"
}

export const heroTagline: ContentByLanguage = {
    pt: "Desenvolvedor <strong>Front-end</strong> e <strong>Designer UX/UI</strong> especializado em criar experiências digitais escaláveis, limpas e focadas no usuário.",
    en: "<strong>Front-end developer</strong> and <strong>UX/UI designer</strong> specializing in creating scalable, clean, and user-focused digital experiences."
}

export const heroCtaUrls: CtaContent = {
    primary: {
        pt: "#portfolio",
        en: "#portfolio"
    },
    secondary: {
        pt: "#contato",
        en: "#contact"
    }
};

export const heroCtaTitles: CtaContent = {
    primary: {
        pt: "Visualizar meus projetos de desenvolvimento e design",
        en: "View my development and design projects"
    },
    secondary: {
        pt: "Entrar em contato para orçamentos ou propostas",
        en: "Contact me for quotes or proposals."
    }
};

export const heroCtaLabels: CtaContent = {
    primary: {
        pt: "Ver meus projetos",
        en: "View my projects"
    },
    secondary: {
        pt: "Fale comigo",
        en: "Get in touch"
    }
};

export const heroKeywordsLabel: ContentByLanguage = {
    pt: "Tecnologias e competências",
    en: "Technologies and skills"
}

export const keywordsRow1 = ["ES6+", "Mobile-first", "React", "Typescript", "Figma", "TDD"];
export const keywordsRow2 = ["Next JS", "JavaScript", "Git / Github", "UX/UI Design", "Styled Components"];