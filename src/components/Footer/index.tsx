"use client";

import { LanguageProps } from "@/types/language";
import styles from "./Footer.module.css";
import Container from "../Container";
import Link from "next/link";
import Logo from "../Logo";
import Brand from "../Brand";
import { footerCopyrightInfo, footerPrivacyLinkLabel } from "@/data/page-content/footer";
import { useRef, useState } from "react";
import Modal from "../Modal";
import TermsAndPrivacy from "../TermsAndPrivacy";
import { useWindowBehavior } from "@/hooks/window-behavior";
import { headerLogoUrl } from "@/data/page-content/header";

export default function Footer({ lang = "pt" }: LanguageProps) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
    const { scrollToTop } = useWindowBehavior()

    const handleOpenTerms = () => {
        if (modalRef.current) {
            setModalIsOpen(true);
            modalRef.current.showModal();
        }
    }

    return (
        <>
            <footer className={styles.footer}>
                <Container className={styles.footer__container}>
                    <div className={styles.footer__logo}>
                        <Link
                            href={headerLogoUrl[lang]}
                            onClick={event => scrollToTop(event)}>
                            <Logo />
                            <Brand className={styles.footer__brand} />
                        </Link>
                    </div>

                    <div className={styles.footer__info}>
                        <small className={styles.footer__termsLink}>
                            <button
                                className="button clear"
                                onClick={handleOpenTerms}>
                                {footerPrivacyLinkLabel[lang]}
                            </button>
                        </small>

                        <small className={styles.footer__copyright}>
                            &copy; {new Date().getFullYear()} | {footerCopyrightInfo[lang]}
                        </small>
                    </div>
                </Container>
            </footer>

            <Modal
                lang={lang}
                ref={modalRef}
                onClose={() => setModalIsOpen(false)}>
                {modalIsOpen && <TermsAndPrivacy lang={lang} />}
            </Modal>
        </>
    );
}
