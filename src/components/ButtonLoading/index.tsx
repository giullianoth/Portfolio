import styles from "./ButtonLoading.module.css";

export default function ButtonLoading() {
    return (
        <div className={styles.loading}>
            <div className={styles.loading__ring} />
            <div className={styles.loading__ring} />
            <div className={styles.loading__ring} />
            <div className={styles.loading__ring} />
        </div>
    );
}
