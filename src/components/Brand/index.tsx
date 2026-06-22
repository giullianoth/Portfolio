import styles from "./Brand.module.css";

type Props = {
    className?: string
    spaced?: boolean
};

export default function Brand({ className, spaced }: Props) {
    const brandClassName = styles.brand
        + (className ? ` ${className}` : "")
        + (spaced ? ` ${styles.spaced}` : "");

    return (
        <p className={brandClassName} aria-hidden={true}>
            Giulliano <strong>Guimarães</strong>
        </p>
    );
}