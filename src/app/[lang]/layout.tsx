import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { metadataDescription } from "@/data/page-content/metadata";
import { ContentByLanguage } from "@/types/language";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giulliano Guimarães | Front-end Developer & UX/UI Designer",
  description: metadataDescription.pt,
  icons: ["/images/favicon.ico"]
};

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as keyof ContentByLanguage;

  return (
    <html
      lang={lang}
      className={`${montserrat.variable} ${plusJakartaSans.variable}`}
      data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
