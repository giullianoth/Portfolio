import styles from "./Pattern.module.css";

export default function DotsPattern() {
    return (
        <div
            className={`${styles.pattern} ${styles.dots}`}
            style={{ backgroundImage: "url(/images/pattern_grid_dots.svg)" }} />
    );
}
