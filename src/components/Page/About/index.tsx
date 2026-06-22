"use client";

import { LanguageProps } from "@/types/language";
import styles from "./About.module.css";
import { aboutCtaContactLabel, aboutCtaContactTitle, aboutCtaContactUrl, aboutCtaResumeLabel, aboutCtaResumeTitle, aboutPhotoAlt, aboutSectionId, aboutSubtitle, aboutText, aboutTitle } from "@/data/page-content/about";
import Container from "@/components/Container";
import { useWindowBehavior } from "@/hooks/window-behavior";
import Image from "next/image";
import Text from "@/components/Text";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export default function About({ lang = "pt" }: LanguageProps) {
    const { breakpoints, scrollByLinkClick } = useWindowBehavior();
    const aboutTextMarkup = { __html: aboutText[lang] ?? "" };

    return (
        <section
            className={styles.about}
            id={aboutSectionId[lang]}
            aria-labelledby="about-heading">
            <Container className={styles.about__container}>
                <header className="heading">
                    <p>{aboutSubtitle[lang]}</p>
                    <h2 id="about-heading">{aboutTitle[lang]}</h2>
                </header>

                <div className={styles.about__wrapper}>
                    <div className={styles.about__photo}>
                        <picture>
                            <source
                                media={`(min-width: ${breakpoints.large}px)`}
                                srcSet="/images/eu_desktop.png" />

                            <Image
                                src="/images/eu_mobile.png"
                                alt={aboutPhotoAlt[lang]}
                                width={335}
                                height={383} />
                        </picture>
                    </div>

                    <article className={styles.about__info}>
                        <header className={styles.about__infoHeading}>
                            <h3>Giulliano Guimarães</h3>
                            <p className={styles.about__role}>Front-end Developer & UX/UI Designer</p>
                        </header>

                        <Text className={styles.about__text}>
                            <div dangerouslySetInnerHTML={aboutTextMarkup} />
                        </Text>

                        <div className={styles.about__cta}>
                            <Link
                                href={aboutCtaContactUrl[lang]}
                                className="button"
                                title={aboutCtaContactTitle[lang]}
                                onClick={event => scrollByLinkClick(event, aboutCtaContactUrl[lang])}>
                                {aboutCtaContactLabel[lang]}
                            </Link>

                            <a
                                href="/pdf/curriculo-giulliano.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button outline"
                                title={aboutCtaResumeTitle[lang]}>
                                <FaFilePdf />
                                {aboutCtaResumeLabel[lang]}
                            </a>
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
}
