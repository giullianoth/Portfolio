"use client";

import { LanguageProps } from "@/types/language";
import styles from "./Processes.module.css";
import DotsPattern from "@/components/Pattern/DotsPattern";
import Container from "@/components/Container";
import { processesCardContent, processesCardIcon, processesCardTitle, processesCtaButtonLabel, processesCtaButtonTitle, processesCtaUrl, processesTitle } from "@/data/page-content/processes";
import Card from "@/components/Card";
import { FaCompassDrafting, FaMagnifyingGlass, FaVialCircleCheck } from "react-icons/fa6";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import Link from "next/link";
import { useWindowBehavior } from "@/hooks/window-behavior";

const PROCESS_ICON = {
    magnifyingGlass: <FaMagnifyingGlass />,
    compassDrafting: <FaCompassDrafting />,
    laptopCode: <FaLaptopCode />,
    vialCircleCheck: <FaVialCircleCheck />,
    rocket: <FaRocket />,
};

export default function Processes({ lang = "pt" }: LanguageProps) {
    const { scrollByLinkClick } = useWindowBehavior();

    return (
        <section className={styles.processes} aria-labelledby="processes-heading">
            <DotsPattern />
            <Container className={styles.processes__container}>
                <header className={styles.processes__heading}>
                    <h2 id="processes-heading">
                        {processesTitle[lang]}
                    </h2>
                </header>

                <div className={styles.processes__list}>
                    {processesCardTitle.map((item, index) => (
                        <Card
                            sideBySideContent
                            key={item[lang]}
                            className={styles.process}
                            titleIcon={PROCESS_ICON[processesCardIcon[index] as keyof typeof PROCESS_ICON]}
                            title={item[lang]}
                            content={processesCardContent[index][lang]}
                            role="listitem" />
                    ))}
                </div>

                <div className={styles.processes__cta}>
                    <Link
                        className="button"
                        href={processesCtaUrl[lang]}
                        title={processesCtaButtonTitle[lang]}
                        onClick={event => scrollByLinkClick(event, processesCtaUrl[lang])}>
                        {processesCtaButtonLabel[lang]}
                    </Link>
                </div>
            </Container>
        </section>
    );
}
