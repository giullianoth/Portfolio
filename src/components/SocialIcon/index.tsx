import { ReactNode } from "react";
import styles from "./SocialIcon.module.css";

type Props = {
    icon: ReactNode;
};

export default function SocialIcon({ icon }: Props) {
    return (
        <span className={styles.socialIcon}>
            {icon}
        </span>
    );
}