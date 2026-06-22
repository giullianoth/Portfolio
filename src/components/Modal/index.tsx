"use client";

import { forwardRef, MouseEvent, ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";
import { FaXmark } from "react-icons/fa6";
import { useWindowBehavior } from "@/hooks/window-behavior";
import { Language } from "@/types/language";
import { modalCloseButtonAriaLabel, modalCloseButtonTitle } from "@/data/page-content/modal";

type Props = {
    children: ReactNode;
    onClose?: () => void;
    fixed?: boolean;
    lang: Language;
};

const ANIMATION_TIMEOUT = 300;

const Modal = forwardRef<HTMLDialogElement, Props>(({ children, onClose, fixed, lang }, ref) => {
    const { blockScroll } = useWindowBehavior();
    const modalContentClassName = fixed ? `${styles.modal__content} ${styles.fixed}` : styles.modal__content;

    useEffect(() => {
        if (!ref || !("current" in ref) || !ref.current) {
            return;
        }

        const dialogElement = ref.current;

        const handleToggleScroll = () => {
            if (dialogElement.open) {
                blockScroll(true);
            } else {
                blockScroll(false);
            }
        };

        dialogElement.addEventListener("close", handleToggleScroll);

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === "open") {
                    handleToggleScroll();
                }
            })
        });

        observer.observe(dialogElement, { attributes: true });

        return () => {
            dialogElement.removeEventListener("close", handleToggleScroll);
            observer.disconnect();
            blockScroll(false);
        };
    }, [ref, blockScroll]);

    const triggerCloseAnimation = (dialogElement: HTMLDialogElement) => {
        dialogElement.classList.add(styles.closing);

        setTimeout(() => {
            dialogElement.close();
            dialogElement.classList.remove(styles.closing);
        }, ANIMATION_TIMEOUT);
    };

    const handleClose = () => {
        if (ref && "current" in ref && ref.current) {
            triggerCloseAnimation(ref.current);
        }
    };

    const handleOverlayClick = (event: MouseEvent<HTMLDialogElement>) => {
        const dialogElement = event.currentTarget;
        const container = dialogElement.querySelector(`.${styles.modal__container}`);

        if (!container) {
            return;
        }

        const rect = container.getBoundingClientRect();

        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {
            triggerCloseAnimation(dialogElement);
        }
    }

    return (
        <dialog
            ref={ref}
            id="main-modal"
            className={styles.modal}
            onClose={onClose}
            onClick={handleOverlayClick}>
            <button
                className={`button clear ${styles.modal__close}`}
                title={modalCloseButtonTitle[lang]}
                aria-label={modalCloseButtonAriaLabel[lang]}
                onClick={handleClose}>
                <FaXmark />
            </button>

            <div className={styles.modal__container}>
                <div className={modalContentClassName}>
                    {children}
                </div>
            </div>
        </dialog>
    );
});

Modal.displayName = "Modal";
export default Modal;