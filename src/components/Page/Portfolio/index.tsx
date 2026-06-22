"use client";

import { LanguageProps } from "@/types/language";
import styles from "./Portfolio.module.css";
import Container from "@/components/Container";
import { portfolioCtaLabel, portfolioCtaTitle, portfolioEmptyLabel, portfolioListTitle, portfolioSubtitle, portfolioTagline, portfolioTitle } from "@/data/page-content/portfolio";
import Grid from "@/components/Grid";
import ProjectCard from "@/components/ProjectCard";
import CaseStudy from "@/components/CaseStudy";
import { Project } from "@/types/project";
import { portfolioData } from "@/data/portfolio/portfolio";
import { useRef, useState } from "react";
import Modal from "@/components/Modal";

export default function Portfolio({ lang = "pt" }: LanguageProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [listIsOpen, setListIsOpen] = useState<boolean>(false);
    const modalProjectRef = useRef<HTMLDialogElement>(null);
    const modalProjectsListRef = useRef<HTMLDialogElement>(null);

    const portfolioTaglineMarkup = { __html: portfolioTagline[lang] };
    const featuredProjects: Project[] = portfolioData.filter(project => project.featured);

    const handleOpenProject = (project: Project) => {
        if (modalProjectRef.current) {
            setSelectedProject(project);
            modalProjectRef.current.showModal();
        }
    };

    const handleOpenProjectsList = () => {
        if (modalProjectsListRef.current) {
            setListIsOpen(true);
            modalProjectsListRef.current.showModal();
        }
    };

    const handleOpenProjectFromList = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setListIsOpen(false);
    };

    return (
        <>
            <section
                className={styles.portfolio}
                id="portfolio"
                aria-labelledby="portfolio-heading">
                <Container>
                    <header className="heading">
                        <p>{portfolioSubtitle[lang]}</p>
                        <h2 id="portfolio-heading">{portfolioTitle[lang]}</h2>
                    </header>

                    <p className="tagline" dangerouslySetInnerHTML={portfolioTaglineMarkup} />

                    <Grid columns={3} narrow>
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                className={styles.portfolio__project}
                                lang={lang}
                                onOpenProject={handleOpenProject} />
                        ))}
                    </Grid>

                    <div className={styles.portfolio__cta}>
                        <button
                            className="button"
                            title={portfolioCtaTitle[lang]}
                            onClick={handleOpenProjectsList}>
                            {portfolioCtaLabel[lang]}
                        </button>
                    </div>
                </Container>
            </section>

            <Modal
                lang={lang}
                fixed
                ref={modalProjectRef}
                onClose={handleCloseModal}>
                {selectedProject &&
                    <CaseStudy
                        project={selectedProject}
                        lang={lang} />}
            </Modal>

            <Modal
                lang={lang}
                ref={modalProjectsListRef}
                onClose={handleCloseModal}>
                {listIsOpen &&
                    (selectedProject
                        ? <CaseStudy
                            shouldGoBack
                            lang={lang}
                            project={selectedProject}
                            onGoBack={() => setSelectedProject(null)} />

                        : <>
                            <header className="heading">
                                <h2>{portfolioListTitle[lang]}</h2>
                            </header>

                            {portfolioData.length > 0
                                ? <Grid columns={3} narrow>
                                    {portfolioData.map(project => (
                                        <ProjectCard
                                            key={project.id}
                                            lang={lang}
                                            project={project}
                                            onOpenProject={handleOpenProjectFromList} />
                                    ))}
                                </Grid>
                                : <p>{portfolioEmptyLabel[lang]}</p>}
                        </>)}
            </Modal>
        </>
    );
}