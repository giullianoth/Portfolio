import { LanguageProps } from "@/types/language";
import styles from "./Contact.module.css";
import Container from "../../Container";
import { contactAlternativeChannelLabel, contactChannels, contactChannelsIcon, contactChannelsLabel, contactChannelsUrl, contactSectionId, contactSubtitle, contactTagline, contactTitle } from "@/data/page-content/contact";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SocialIcon from "../../SocialIcon";
import { FaArrowTurnDown } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

const CHANNELS_ICONS = {
    envelope: <FaEnvelope />,
    whatsapp: <FaWhatsapp />,
    linkedinIn: <FaLinkedinIn />,
};

export default function Contact({ lang = "pt" }: LanguageProps) {
    const contactTaglineMarkup = { __html: contactTagline[lang] ?? "" };

    return (
        <section
            className={styles.contact}
            id={contactSectionId[lang]}
            aria-labelledby="contact-heading">
            <Container className={styles.contact__container}>
                <div className={styles.contact__wrapper}>
                    <header className="heading">
                        <p>{contactSubtitle[lang]}</p>
                        <h2 id="contact-heading">{contactTitle[lang]}</h2>
                    </header>

                    <p className="tagline" dangerouslySetInnerHTML={contactTaglineMarkup} />

                    <ul>
                        {contactChannels.map((channel, index) => (
                            <li
                                key={channel}
                                className={styles.contact__channel}>
                                <a
                                    href={contactChannelsUrl[index]}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <SocialIcon icon={CHANNELS_ICONS[contactChannelsIcon[index] as keyof typeof CHANNELS_ICONS]} />

                                    <span className={styles.contact__channelLabel}>
                                        {contactChannelsLabel[index][lang]}
                                    </span>
                                </a>
                            </li>
                        ))}

                        <li className={styles.contact__channel}>
                            <p>
                                <span className={styles.contact__channelLabel}>
                                    {contactAlternativeChannelLabel[lang]}
                                </span>

                                <span className={styles.contact__channelAlternative}>
                                    <FaArrowTurnDown />
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={styles.contact__wrapper}>
                    <ContactForm lang={lang} />
                </div>
            </Container>
        </section>
    );
}
