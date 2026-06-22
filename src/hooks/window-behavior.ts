"use client";

import { MouseEvent, useCallback, useEffect, useState } from "react";

export function useWindowBehavior() {
    const breakpoints = {
        small: 560,
        large: 992
    };

    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [windowSize, setWindowSize] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === "undefined") {
                return;
            }

            setIsScrolling(window.scrollY > 0);
        };

        const handleResize = () => {
            if (typeof window === "undefined") {
                return;
            }

            setWindowSize(window.innerWidth);
        }

        handleScroll();
        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const blockScroll = useCallback((shouldDisable: boolean) => {
        if (typeof window === "undefined") {
            return;
        }

        const body = document.body;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (shouldDisable) {
            body.style.overflow = "hidden";
            body.style.height = "100vh";
            body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            body.style.overflow = "";
            body.style.height = "";
            body.style.paddingRight = "";
        }
    }, []);

    const scrollByLinkClick = useCallback((event: MouseEvent<HTMLAnchorElement>, targetUrl: string) => {
        if (typeof window === "undefined") {
            return;
        }

        if (targetUrl.startsWith("#") || targetUrl.includes("#")) {
            const hash = targetUrl.split("#")[1];
            const element = document.getElementById(hash);

            if (element) {
                event.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", targetUrl);
            }
        }
    }, []);

    const scrollToTop = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
        if (typeof window === "undefined") {
            return;
        }

        event.preventDefault();
        window.scrollTo(0, 0);
    }, []);

    return {
        breakpoints,
        isScrolling,
        windowSize,
        blockScroll,
        scrollByLinkClick,
        scrollToTop,
    };
}