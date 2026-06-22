import Contact from "@/components/Page/Contact";
import Header from "@/components/Header";
import About from "@/components/Page/About";
import Hero from "@/components/Page/Hero";
import Portfolio from "@/components/Page/Portfolio";
import Processes from "@/components/Page/Processes";
import Skills from "@/components/Page/Skills";
import Footer from "@/components/Footer";
import { ContentByLanguage, LanguageProps } from "@/types/language";
import { Metadata } from "next";
import { metadataDescription, metadataKeywords, metadataOgDescription, metadataTitle } from "@/data/page-content/metadata";

type Props = {
  params: Promise<LanguageProps>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const langKey = lang ? lang : "pt" as keyof ContentByLanguage;

  const currentTitle = metadataTitle[langKey];
  const currentDescription = metadataDescription[langKey];
  const currentKeywords = metadataKeywords[langKey];
  const currentOgDescription = metadataOgDescription[langKey];

  return {
    title: currentTitle,
    description: currentDescription,
    keywords: currentKeywords,
    authors: [{ name: "Giulliano Guimarães" }],
    robots: "index, follow",
    openGraph: {
      title: currentTitle,
      description: currentOgDescription,
      type: "website",
      url: `https://tharsoweb.com.br/${langKey}`,
      images: [
        {
          url: "https://tharsoweb.com.br/assets/images/social_share_image.jpg",
          width: 1200,
          height: 630,
          alt: currentTitle,
        },
      ],
      locale: langKey === "pt" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@giullianoth",
      creator: "@giullianoth",
      title: currentTitle,
      description: currentOgDescription,
      images: ["https://tharsoweb.com.br/assets/images/social_share_image.jpg"],
    },
    icons: {
      icon: "/images/favicon.ico",
    }
  };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const langKey = lang ? lang : "pt" as keyof ContentByLanguage;

  return (
    <>
      <Header lang={langKey} />

      <main>
        <Hero lang={langKey} />
        <Skills lang={langKey} />
        <Portfolio lang={langKey} />
        <Processes lang={langKey} />
        <About lang={langKey} />
        <Contact lang={langKey} />
      </main>

      <Footer lang={langKey} />
    </>
  );
}
