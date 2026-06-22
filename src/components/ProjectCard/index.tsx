"use client";

import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";
import { Language } from "@/types/language";
import { projectActionAriaLabel, projectActionLabel, projectLabel } from "@/data/page-content/portfolio";
import { useWindowBehavior } from "@/hooks/window-behavior";
import Image from "next/image";

type Props = {
    project: Project;
    className?: string;
    lang: Language;
    onOpenProject: (project: Project) => void;
};

export default function ProjectCard({ project, className, lang, onOpenProject }: Props) {
    const { breakpoints } = useWindowBehavior();
    const projectClassName = className ? `${styles.project} ${className}` : styles.project;

    return (
        <article
            className={projectClassName}
            role="region"
            aria-label={projectLabel(project.name)[lang]}>
            <picture>
                <source
                    media={`(min-width: ${breakpoints.large}px)`}
                    srcSet={`/images/portfolio/${project.images.thumbs.desktop}`} />
                <source
                    media={`(min-width: ${breakpoints.small}px)`}
                    srcSet={`/images/portfolio/${project.images.thumbs.tablet}`} />
                <Image
                    src={`/images/portfolio/${project.images.thumbs.mobile}`}
                    alt={project.images.alt[lang] ?? ""}
                    width={375}
                    height={375}
                    className={styles.project__image} />
            </picture>

            <div className={styles.project__info}>
                <header className={styles.project__name}>
                    <h3>{project.name}</h3>
                </header>

                <p className={styles.project__description}>
                    {project.description[lang]}
                </p>

                <p className={styles.project__tech}>
                    <strong>Tech:</strong> {project.tech.join(", ")}
                </p>

                <button
                    className="button clear"
                    aria-label={projectActionAriaLabel(project.name)[lang]}
                    title={projectActionAriaLabel(project.name)[lang]}
                    onClick={() => onOpenProject(project)}>
                    {projectActionLabel[lang]}
                </button>
            </div>
        </article>
    );
}