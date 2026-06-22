"use client";

import { CSSProperties, ReactNode } from "react";
import styles from "./Grid.module.css";
import { useWindowBehavior } from "@/hooks/window-behavior";

type Props = {
    columns: number;
    gap?: number | string;
    children: ReactNode;
    narrow?: boolean;
    className?: string;
};

export default function Grid({ children, columns, narrow, className, gap = 20 }: Props) {
    const { windowSize, breakpoints } = useWindowBehavior();

    const gridStyle: CSSProperties = {
        gridTemplateColumns: windowSize >= breakpoints.large ? `repeat(${columns}, 1fr)` : "",
        gap: typeof gap === "string" ? gap : `${gap}px`
    }

    const narrowGridClassName = narrow ? ` ${styles.narrow}` : ""
    const gridClassName = (className ? `${styles.grid} ${className}` : styles.grid) + narrowGridClassName;

    return (
        <div
            className={gridClassName}
            style={gridStyle}>
            {children}
        </div>
    );
}