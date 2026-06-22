"use client";

import styles from "./InfiniteCarousel.module.css";
import InfiniteCarouselItems from "./Items";

type Props = {
    items: string[];
    direction?: "left" | "right";
    duration?: number;
    carouselListClassName?: string;
    carouselItemClassName?: string;
};

export default function InfiniteCarousel({
    items,
    direction = "left",
    duration = 120,
    carouselListClassName,
    carouselItemClassName
}: Props) {
    const listClassName = carouselListClassName
        ? `${styles.carousel__group} ${carouselListClassName} ${styles[direction]}`
        : `${styles.carousel__group} ${styles[direction]}`;

    const itemClassName = carouselItemClassName ? carouselItemClassName : "";

    return (
        <div className={styles.carousel}>
            {direction === "right" &&
                <InfiniteCarouselItems
                    isClone
                    items={items}
                    listClassName={listClassName}
                    itemClassName={itemClassName}
                    duration={duration} />}

            <InfiniteCarouselItems
                items={items}
                listClassName={listClassName}
                itemClassName={itemClassName}
                duration={duration} />

            {direction === "left" &&
                <InfiniteCarouselItems
                    isClone
                    items={items}
                    listClassName={listClassName}
                    itemClassName={itemClassName}
                    duration={duration} />}
        </div>
    );
}