import styles from "./Pattern.module.css";

export default function GeometricPattern() {
    return (
        <div
            className={`${styles.pattern} ${styles.geometric}`}
            style={{ backgroundImage: "url(/images/pattern_geometric_abstract.svg)" }} />
    );
}
