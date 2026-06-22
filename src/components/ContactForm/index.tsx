"use client";

import { LanguageProps } from "@/types/language";
import styles from "./ContactForm.module.css";
import { contactFormEmailLabel, contactFormEmailPlaceholder, contactFormMessageLabel, contactFormMessagePlaceholder, contactFormNameLabel, contactFormNamePlaceholder, contactFormSubmitLabel } from "@/data/page-content/contact";
import { useActionState } from "react";
import { sendContactForm } from "@/services/contact";
import ButtonLoading from "../ButtonLoading";

export default function ContactForm({ lang = "pt" }: LanguageProps) {
    const [state, formAction, isPending] = useActionState(sendContactForm, {
        success: false,
        errors: {},
        message: "",
        enteredValues: { name: "", email: "", message: "" }
    });

    const formStateMessageClassName = state.success
        ? styles.form__successMessage : styles.form__errorMessage;

    return (
        <form
            className={styles.form}
            action={formAction}>
            <input type="hidden" name="lang" value={lang} />

            <div className="form-row">
                <label htmlFor="contact-name">
                    {contactFormNameLabel[lang]}
                </label>

                <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder={contactFormNamePlaceholder[lang]}
                    autoComplete="name"
                    defaultValue={state.enteredValues?.name}
                    required />

                {state.errors?.name &&
                    <span className={styles.form__fieldErrorMessage}>
                        {state.errors.name[0]}
                    </span>}
            </div>

            <div className="form-row">
                <label htmlFor="contact-email">
                    {contactFormEmailLabel[lang]}
                </label>

                <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder={contactFormEmailPlaceholder[lang]}
                    autoComplete="email"
                    defaultValue={state.enteredValues?.email}
                    required />

                {state.errors?.email &&
                    <span className={styles.form__fieldErrorMessage}>
                        {state.errors.email[0]}
                    </span>}
            </div>

            <div className="form-row">
                <label htmlFor="contact-message">
                    {contactFormMessageLabel[lang]}
                </label>

                <textarea
                    name="message"
                    id="contact-message"
                    rows={6}
                    placeholder={contactFormMessagePlaceholder[lang]}
                    defaultValue={state.enteredValues?.message}
                    required></textarea>

                {state.errors?.message &&
                    <span className={styles.form__fieldErrorMessage}>
                        {state.errors.message[0]}
                    </span>}
            </div>

            <button type="submit" className="button" disabled={isPending}>
                {contactFormSubmitLabel[lang]}
                {isPending && <ButtonLoading />}
            </button>

            {state.message &&
                <p className={formStateMessageClassName}>
                    {state.message}
                </p>}
        </form>
    )
}
