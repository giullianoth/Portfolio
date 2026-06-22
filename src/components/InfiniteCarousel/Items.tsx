import { HTMLAttributes } from "react";

type Props = {
    items: string[];
    listClassName?: string;
    itemClassName?: string;
    isClone?: boolean;
    duration?: number;
};

export default function InfiniteCarouselItems({ items, isClone, itemClassName, listClassName, duration = 120 }: Props) {
    const cloneProps: HTMLAttributes<HTMLUListElement> = isClone
        ? { "aria-hidden": "true" } : {};

    return (
        <ul
            className={listClassName}
            style={{ animationDuration: `${duration}s` }}
            {...cloneProps}>
            {items.map((item, index) => (
                <li key={`clone-${index}`} className={itemClassName}>
                    {item}
                </li>
            ))}
        </ul>
    );
}