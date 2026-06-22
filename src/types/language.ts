export interface ContentByLanguage {
  pt: string;
  en: string;
};

export type Language = keyof ContentByLanguage;

export interface LanguageProps {
  lang?: Language;
};