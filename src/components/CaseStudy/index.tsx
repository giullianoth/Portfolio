"use client";

import type { Project } from "@/types/project";
import styles from "./CaseStudy.module.css";
import { Language } from "@/types/language";
import { projectBackButtonLabel, projectLinkAriaLabel, projectRepositoryLonkLabel } from "@/data/page-content/project";
import { useWindowBehavior } from "@/hooks/window-behavior";
import Image from "next/image";
import Text from "../Text";
import { FaCircleChevronLeft, FaDisplay } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

type Props = {
    project: Project;
    lang: Language
    shouldGoBack?: boolean;
    onGoBack?: () => void
};

export default function CaseStudy({ project, lang, shouldGoBack, onGoBack }: Props) {
    const { breakpoints } = useWindowBehavior();

    const caseStydyMarkup = { __html: project.caseStudy[lang] ?? "" };

    return (
        <article className={styles.project}>
            <div className={styles.project__content}>
                <figure className={styles.project__image}>
                    <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={projectLinkAriaLabel(project.name)[lang]}>
                        <picture>
                            <source
                                media={`(min-width: ${breakpoints.large}px)`}
                                srcSet={`/images/portfolio/${project.images.desktop}`} />
                            <source
                                media={`(min-width: ${breakpoints.small}px)`}
                                srcSet={`/images/portfolio/${project.images.tablet}`} />

                            <Image
                                src={`/images/portfolio/${project.images.mobile}`}
                                alt={project.images.alt[lang]}
                                width={295}
                                height={320} />
                        </picture>
                    </a>
                </figure>

                <div className={styles.project__info}>
                    <Text className={`text-wrapper ${styles.project__text}`}>
                        <header className={styles.project__title}>
                            <h2>{project.name}</h2>
                        </header>

                        <p className={styles.project__tech}>
                            {project.tech.join(", ")}
                        </p>

                        <div dangerouslySetInnerHTML={caseStydyMarkup} />
                    </Text>
                </div>
            </div>

            <footer className={styles.project__actions}>
                <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button clear">
                    <FaDisplay />
                    Deploy
                </a>

                <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button clear">
                    <FaCode />
                    {projectRepositoryLonkLabel[lang]}
                </a>

                {shouldGoBack &&
                    <button
                        className="button clear"
                        onClick={() => onGoBack && onGoBack()}>
                        <FaCircleChevronLeft />
                        {projectBackButtonLabel[lang]}
                    </button>}
            </footer>
        </article>
    );
}