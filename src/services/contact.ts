"use server";

import { contactFieldsErrorMessage, contactFormInvalidData, contactFormServerErrorMessage, contactFormSuccessMessage } from "@/data/page-content/contact";
import { ContentByLanguage } from "@/types/language";
import { z } from "zod";
import emailjs from "@emailjs/nodejs";

const MESSAGE_MIN_LENGTH = 20;

const contactSchema = (lang: keyof ContentByLanguage) => z.object({
    name: z.string().min(1, contactFieldsErrorMessage.name[lang]),
    email: z.string().email(contactFieldsErrorMessage.email[lang]),
    message: z.string().min(MESSAGE_MIN_LENGTH, contactFieldsErrorMessage.message(MESSAGE_MIN_LENGTH)[lang]),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendContactForm(_prevState: any, formData: FormData) {
    const lang = (formData.get("lang") || "pt") as keyof ContentByLanguage;

    const rawFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    }

    const validatedFields = contactSchema(lang).safeParse(rawFormData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: contactFormInvalidData[lang],
            enteredValues: rawFormData,
        };
    }

    const { name, email, message } = validatedFields.data;

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            {
                userName: name,
                userEmail: email,
                message: message,
            },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            }
        );

        console.log(`[EmailJS] Email successfully sent from: ${email}`);

        return {
            success: true,
            errors: {},
            message: contactFormSuccessMessage[lang],
            enteredValues: { name: "", email: "", message: "" },
        };
    } catch (error) {
        console.error("[EmailJS Error]:", error);

        return {
            success: false,
            errors: {},
            message: contactFormServerErrorMessage[lang],
            enteredValues: rawFormData,
        };
    }
}