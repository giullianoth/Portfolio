import { ContentByLanguage } from "@/types/language";
import { headerMainMenuUrls } from "./header";

export const processesTitle: ContentByLanguage = {
    pt: "Como minha metodologia dá vida aos projetos",
    en: "How my methodology brings projects to life"
};

export const processesCardTitle: ContentByLanguage[] = [
    {
        pt: "Descoberta & UX Research",
        en: "Discovery & UX Research"
    },
    {
        pt: "Arquitetura & Design",
        en: "Architecture & Design"
    },
    {
        pt: "Desenvolvimento",
        en: "Development"
    },
    {
        pt: "QA & Testes",
        en: "QA & Tests"
    },
    {
        pt: "Deploy & Entrega",
        en: "Deploy & Delivery"
    },
];

export const processesCardIcon: string[] = [
    "magnifyingGlass",
    "compassDrafting",
    "laptopCode",
    "vialCircleCheck",
    "rocket",
];

export const processesCardContent: ContentByLanguage[] = [
    {
        pt: "<strong>Imersão e Análise:</strong> Entendimento das necessidades do usuário e requisitos técnicos. Defino os objetivos do projeto e mapeio as funcionalidades críticas para o sucesso da aplicação.",
        en: "<strong>Immersion and Analysis:</strong> Understanding user needs and technical requirements. Defining project objectives and mapping out the functionalities critical to the application's success."
    },
    {
        pt: "<strong>Wireframing e UI:</strong> Criação da arquitetura de informação e prototipagem de alta fidelidade. Planejo a interface focando em usabilidade, acessibilidade e consistência visual (Design System).",
        en: "<strong>Wireframing and UI:</strong> Creation of information architecture and high-fidelity prototyping. I plan the interface focusing on usability, accessibility, and visual consistency (Design System)."
    },
    {
        pt: "<strong>Código e Performance:</strong> Implementação utilizando tecnologias modernas como React e Node.js. Foco em código limpo, componentização, tipagem com TypeScript e otimização de performance.",
        en: "<strong>Code and Performance:</strong> Implementation using modern technologies such as React and Node.js. Focus on clean code, componentization, typing with TypeScript, and performance optimization."
    },
    {
        pt: "<strong>Validação Técnica:</strong> Realização de testes de funcionalidade, responsividade e acessibilidade. Garanto que a aplicação seja robusta em diferentes dispositivos e navegadores.",
        en: "<strong>Technical Validation:</strong> Performing functionality, responsiveness, and accessibility tests. I ensure the application is robust across different devices and browsers."
    },
    {
        pt: "<strong>Lançamento Estratégico:</strong> Configuração de ambiente e deploy da aplicação. Entrego não apenas o código, mas uma solução pronta para escalar e gerar valor imediato.",
        en: "<strong>Strategic Launch:</strong> Environment setup and application deployment. I deliver not just the code, but a solution ready to scale and generate immediate value."
    },
];

export const processesCtaButtonTitle: ContentByLanguage = {
    pt: "Entrar em contato para propostas profissionais",
    en: "Contact me for professional proposals"
};

export const processesCtaButtonLabel: ContentByLanguage = {
    pt: "Fale comigo para propostas ou projetos",
    en: "Contact me for proposals or projects"
};

export const processesCtaUrl: ContentByLanguage = headerMainMenuUrls[3];