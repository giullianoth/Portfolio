import { ContentByLanguage } from "./language";

export interface Project {
    id: number;
    name: string;
    description: ContentByLanguage;
    featured: boolean;
    tech: string[];
    images: {
        thumbs: {
            desktop: string;
            tablet: string;
            mobile: string;
        }
        desktop: string;
        tablet: string;
        mobile: string;
        alt: ContentByLanguage;
    }
    caseStudy: ContentByLanguage;
    repositoryUrl: string;
    deployUrl: string
}