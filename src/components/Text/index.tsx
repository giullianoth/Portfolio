import { ReactNode } from "react";
import styles from "./Text.module.css";

type Props = {
    children?: ReactNode;
    className?: string;
};

export default function Text({ children, className }: Props) {
    const textClassName = className ? `${styles.text} ${className}` : styles.text;

    return (
        <div className={textClassName}>
            {children}
        </div>
    );
}