import { AriaRole, ReactNode } from "react";
import styles from "./Card.module.css";

type Props = {
    titleIcon?: ReactNode;
    title: string;
    content: string;
    badgeItems?: string[];
    className?: string;
    ariaLabel?: string;
    role?: AriaRole;
    centered?: boolean;
    sideBySideContent?: boolean;
};

export default function Card({
    content,
    title,
    badgeItems,
    titleIcon,
    className,
    ariaLabel,
    role,
    centered,
    sideBySideContent
}: Props) {
    const centeredClassName = centered ? ` ${styles.centered}` : "";
    const sideBySideClassName = sideBySideContent ? ` ${styles.sideBySide}` : ""

    const cardClassName = (className ? `${styles.card} ${className}` : styles.card)
        + centeredClassName + sideBySideClassName;

    const cardHeadingClassName = centered
        ? `${styles.card__heading} ${styles.centered}` : styles.card__heading;

    const cardBadgesClassName = centered
        ? `${styles.card__badges} ${styles.centered}` : styles.card__badges;

    const cardMarkup = { __html: content ?? "" };
    const cardAriaLabel = ariaLabel ? ariaLabel : title;

    return (
        <article
            className={cardClassName}
            aria-label={cardAriaLabel}
            role={role}>
            <header className={cardHeadingClassName}>
                {titleIcon || ""}
                <h3>{title}</h3>
            </header>

            {badgeItems &&
                <ul className={cardBadgesClassName}>
                    {badgeItems.map(item => (
                        <li key={item} className={styles.card__badge}>
                            {item}
                        </li>
                    ))}
                </ul>}

            <div dangerouslySetInnerHTML={cardMarkup} />
        </article>
    );
}