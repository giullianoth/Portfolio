import { termsAndPrivacyContent, termsAndPrivacyTitle } from "@/data/page-content/terms-and-privacy";
import { LanguageProps } from "@/types/language";
import Text from "../Text";

export default function TermsAndPrivacy({ lang = "pt" }: LanguageProps) {
    const termsMarkup = { __html: termsAndPrivacyContent[lang] ?? "" };

    return (
        <section>
            <header className="heading">
                <h2>{termsAndPrivacyTitle[lang]}</h2>
            </header>

            <Text>
                <div dangerouslySetInnerHTML={termsMarkup} />
            </Text>
        </section>
    );
}
