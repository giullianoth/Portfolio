import { ContentByLanguage } from "@/types/language";

export const projectLinkAriaLabel = (projectName: string): ContentByLanguage => ({
    pt: `Acessar o site do projeto ${projectName}`,
    en: `Acess the ${projectName} project live site`
});

export const projectRepositoryLonkLabel: ContentByLanguage = {
    pt: "Repositório",
    en: "repository"
};

export const projectBackButtonLabel: ContentByLanguage = {
    pt: "Voltar",
    en: "Back"
};