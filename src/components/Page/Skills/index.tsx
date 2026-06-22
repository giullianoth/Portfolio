import { LanguageProps } from "@/types/language";
import styles from "./Skills.module.css";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { FaCode } from "react-icons/fa";
import { frontendSkills, frontendSkillsDescription, frontendSkillsLabel, skillsTagline, skillsTitle, webDesignSkills, webDesignSkillsDescription, webDesignSkillsLabel } from "@/data/page-content/skills";
import Grid from "@/components/Grid";

export default function Skills({ lang = "pt" }: LanguageProps) {
    const frontendSkillsContent = frontendSkills.map(skill => skill[lang]);
    const webDesignSkillsContent = webDesignSkills.map(skill => skill[lang]);

    const skillsTaglineMarkup = { __html: skillsTagline[lang] ?? "" };

    return (
        <section
            className={styles.skills}
            id="skills"
            aria-labelledby="skills-heading">
            <Container>
                <header className="heading">
                    <p>Experitse</p>
                    <h2 id="skills-heading">{skillsTitle[lang]}</h2>
                </header>

                <p className="tagline" dangerouslySetInnerHTML={skillsTaglineMarkup} />

                <Grid columns={2}>
                    <Card
                        title="Front-end & Backend"
                        titleIcon={<FaCode />}
                        badgeItems={frontendSkillsContent}
                        content={frontendSkillsDescription[lang]}
                        ariaLabel={frontendSkillsLabel[lang]}
                        role="group"
                        centered />

                    <Card
                        title="Web Design (UX/UI)"
                        titleIcon={<FaCode />}
                        badgeItems={webDesignSkillsContent}
                        content={webDesignSkillsDescription[lang]}
                        ariaLabel={webDesignSkillsLabel[lang]}
                        role="group"
                        centered />
                </Grid>
            </Container>
        </section>
    );
}
