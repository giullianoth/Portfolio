"use client";

import Container from "@/components/Container";
import { LanguageProps } from "@/types/language";
import styles from "./Hero.module.css";
import Brand from "@/components/Brand";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel/List";
import DotsPattern from "@/components/Pattern/DotsPattern";
import GeometricPattern from "@/components/Pattern/GeometricPattern";
import { heroCtaLabels, heroCtaTitles, heroCtaUrls, heroKeywordsLabel, heroTagline, heroTitle, keywordsRow1, keywordsRow2 } from "@/data/page-content/hero";
import { useWindowBehavior } from "@/hooks/window-behavior";

export default function Hero({ lang = "pt" }: LanguageProps) {
    const { scrollByLinkClick } = useWindowBehavior();
    const heroTitleMarkup = { __html: heroTitle[lang] ?? "" };
    const heroTaglineMarkup = { __html: heroTagline[lang] ?? "" };

    return (
        <section className={styles.hero} aria-labelledby="hero-heading">
            <DotsPattern />
            <GeometricPattern />

            <Container className={styles.hero__container}>
                <div className={styles.hero__info}>
                    <Brand spaced className={styles.hero__subtitle} />

                    <header className={styles.hero__heading}>
                        <h1
                            id="hero-heading"
                            dangerouslySetInnerHTML={heroTitleMarkup} />
                    </header>

                    <p
                        className={styles.hero__tagline}
                        dangerouslySetInnerHTML={heroTaglineMarkup} />

                    <div className={styles.hero__cta}>
                        <Link
                            href={heroCtaUrls.primary[lang]}
                            className="button large"
                            title={heroCtaTitles.primary[lang]}
                            onClick={event => scrollByLinkClick(event, heroCtaUrls.primary[lang])}>
                            {heroCtaLabels.primary[lang]}
                        </Link>

                        <Link
                            href={heroCtaUrls.secondary[lang]}
                            className="button large secondary outline"
                            title={heroCtaTitles.secondary[lang]}
                            onClick={event => scrollByLinkClick(event, heroCtaUrls.secondary[lang])}>
                            {heroCtaLabels.secondary[lang]}
                        </Link>
                    </div>
                </div>

                <div
                    role="region"
                    className={styles.hero__keywords}
                    aria-label={heroKeywordsLabel[lang]}>
                    <InfiniteCarousel
                        items={keywordsRow1}
                        carouselListClassName={styles.hero__keywordsList}
                        carouselItemClassName={`button outline ${styles.hero__keywordsItem}`} />

                    <InfiniteCarousel
                        items={keywordsRow2}
                        direction="right"
                        carouselListClassName={styles.hero__keywordsList}
                        carouselItemClassName={`button outline ${styles.hero__keywordsItem}`} />
                </div>
            </Container>
        </section>
    );
}