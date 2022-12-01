import { useEffect, RefObject, useCallback } from 'react';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(isShow: boolean, ref: RefObject<T>, handler: Function) => {
    const handleClickOutside = useCallback((event: Event) => {
        const el = ref?.current;
        // if (!el || el.contains((event?.target as Node) || null) || event.target === btnRef.current) {
        if (!el || el.contains((event?.target as Node) || null)) {
            return;
        }
        handler(); // Call the handler only if the click is outside of the element passed.
        document.removeEventListener("mousedown", handleClickOutside, true);
        document.removeEventListener('touchstart', handleClickOutside, false);
    }, [ref, isShow])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside, true);
        document.addEventListener('touchstart', handleClickOutside, false);
    }, [isShow]);
};