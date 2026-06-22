import { ReactNode } from "react";
import styles from "./Container.module.css";

type Props = {
    children?: ReactNode
    className?: string;
};

export default function Container({ className, children }: Props) {
    const containerClassName = className
        ? `${styles.container} ${className}` : styles.container

    return (
        <div className={containerClassName}>
            {children}
        </div>
    )
};