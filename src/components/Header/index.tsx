"use client";

import Link from "next/link";
import Container from "../Container";
import styles from "./Header.module.css";
import SocialIcon from "../SocialIcon";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MouseEvent, useState } from "react";
import Logo from "../Logo";
import { useWindowBehavior } from "@/hooks/window-behavior";
import { LanguageProps } from "@/types/language";
import { headerChangeLanguageLabel, headerChangeLanguageTitle, headerChangeLanguageUrl, headerLogoLinkContent, headerLogoUrl, headerMainMenuLabels, headerMainMenuUrls, headerMenuIconLabel, headerSocialNetworkLabel } from "@/data/page-content/header";

export default function Header({ lang = "pt" }: LanguageProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { blockScroll, isScrolling, scrollByLinkClick, scrollToTop } = useWindowBehavior();

  const headerClassName = isScrolling
    ? `${styles.header} ${styles.scrolling}` : styles.header;

  const menuNavigationClassName = menuIsOpen
    ? `${styles.header__navigation} ${styles.menuOpen}` : styles.header__navigation;

  const handleToggleMenu = () => {
    setMenuIsOpen(prevState => {
      blockScroll(!prevState);
      return !prevState;
    });
  };

  const handleMenuLinkClick = (event: MouseEvent<HTMLAnchorElement>, targetUrl: string) => {
    setMenuIsOpen(false);
    blockScroll(false);
    scrollByLinkClick(event, targetUrl);
  };

  return (
    <header className={headerClassName}>
      <Container className={styles.header__container}>
        <Link
          href={headerLogoUrl[lang]}
          title={headerLogoLinkContent[lang]}
          className={styles.header__logo}
          onClick={event => scrollToTop(event)}>
          <Logo />
        </Link>

        <div className={styles.header__language}>
          <Link
            className="button small outline"
            href={headerChangeLanguageUrl[lang]}
            title={headerChangeLanguageTitle[lang]}>{headerChangeLanguageLabel[lang]}</Link>
        </div>

        <nav className={menuNavigationClassName}>
          <button
            className={`${styles.header__icon} button clear`}
            aria-expanded={false}
            aria-controls="main-menu"
            aria-label={headerMenuIconLabel[lang]}
            onClick={handleToggleMenu}>
            <span className={styles.header__iconBar}></span>
          </button>

          <div className={styles.header__overlay} id="main-menu">
            <div className={styles.header__menuContainer}>
              <div className={styles.header__menuWrapper}>
                <ul className={styles.header__menuList}>
                  {headerMainMenuLabels.map((label, index) => (
                    <li key={label[lang]} className={styles.header__menuItem}>
                      <Link
                        href={headerMainMenuUrls[index][lang]}
                        onClick={event => handleMenuLinkClick(event, headerMainMenuUrls[index][lang])}>
                        {label[lang]}
                      </Link>
                    </li>
                  ))}

                  <li className={styles.header__menuItem}>
                    <ul className={styles.header__social} aria-label={headerSocialNetworkLabel[lang]}>
                      <li className={styles.header__socialItem}>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn">
                          <SocialIcon icon={<FaLinkedinIn />} />
                        </a>
                      </li>

                      <li className={styles.header__socialItem}>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub">
                          <SocialIcon icon={<FaGithub />} />
                        </a>
                      </li>

                      <li className={styles.header__socialItem}>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram">
                          <SocialIcon icon={<FaInstagram />} />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
