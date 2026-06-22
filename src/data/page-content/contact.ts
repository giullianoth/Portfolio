import { ContentByLanguage } from "@/types/language";

export const contactSectionId: ContentByLanguage = {
    pt: "contato",
    en: "contact"
};

export const contactSubtitle: ContentByLanguage = {
    pt: "Contato",
    en: "Contact"
};

export const contactTitle: ContentByLanguage = {
    pt: "Vamos conectar?",
    en: "Let's connect"
};

export const contactTagline: ContentByLanguage = {
    pt: "Estou aberto a novas <strong>oportunidades profissionais, propostas de projetos</strong> ou apenas para trocar uma ideia sobre tecnologia. Escolha o melhor canal para falarmos:",
    en: "I'm open to new <strong>professional opportunities</strong>, <strong>project proposals</strong>, or just exchanging ideas about technology. Choose the best channel for us to talk:"
};

export const contactChannels: string[] = ["email", "phone", "linkedin"];

export const contactChannelsIcon: string[] = ["envelope", "whatsapp", "linkedinIn"];

export const contactChannelsLabel: ContentByLanguage[] = [
    {
        pt: "tharsoweb@gmail.com",
        en: "tharsoweb@gmail.com",
    },
    {
        pt: "61 99646.8219",
        en: "61 99646.8219",
    },
    {
        pt: "LinkedIn Profissional",
        en: "Professional LinkedIn",
    },
];

export const contactChannelsUrl: string[] = [
    "mailto:tharsoweb@gmail.com",
    "https://wa.me/5561996468219",
    "https://linkedin.com/in/giullianoth",
];

export const contactAlternativeChannelLabel: ContentByLanguage = {
    pt: "Ou envie uma mensagem!",
    en: "Or send a message!"
};

export const contactFormNameLabel: ContentByLanguage = {
    pt: "Nome completo:",
    en: "Full name:"
};

export const contactFormNamePlaceholder: ContentByLanguage = {
    pt: "Digite o seu nome",
    en: "Type your name"
};

export const contactFormEmailLabel: ContentByLanguage = {
    pt: "E-mail profissional:",
    en: "Professional email:"
};

export const contactFormEmailPlaceholder: ContentByLanguage = {
    pt: "Digite o seu e-mail",
    en: "Type your email"
};

export const contactFormMessageLabel: ContentByLanguage = {
    pt: "Sua mensagem:",
    en: "Your message:"
};

export const contactFormMessagePlaceholder: ContentByLanguage = {
    pt: "Fale brevemente sobre a vaga ou o projeto que você tem em mente.",
    en: "Briefly describe the position or project you have in mind."
};

export const contactFormSubmitLabel: ContentByLanguage = {
    pt: "Enviar mensagem",
    en: "Send message"
};

export const contactFieldsErrorMessage: {
    name: ContentByLanguage;
    email: ContentByLanguage;
    message: (minLength: number) => ContentByLanguage;
} = {
    name: {
        pt: "Por favor, digite seu nome",
        en: "Please, enter you name"
    },
    email: {
        pt: "E-mail inválido",
        en: "Invalid email"
    },
    message: (minLength) => ({
        pt: `A mensagem deve conter pelo menos ${minLength} caracteres`,
        en: `The message must have at least ${minLength} characters`
    }),
};

export const contactFormInvalidData: ContentByLanguage = {
    pt: "Dados inválidos.",
    en: "Invalid data."
};

export const contactFormSuccessMessage: ContentByLanguage = {
    pt: "Sua mensagem foi enviada! Responderei em até 24 horas.",
    en: "Your message has been sent! I will reply within 24 hours."
};

export const contactFormServerErrorMessage: ContentByLanguage = {
    pt: "Ocorreu um erro no servidor ao tentar enviar a mensagem.",
    en: "A server error occurred while trying to send the message."
};