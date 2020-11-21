import { useState, useEffect } from 'react';

export default function useOnScreen(
    ref: React.RefObject<any>,
    isOnce?: boolean,
    rootMargin = '0px',
    threshold?: number
): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isOnce) {
                    if (entries[0].isIntersecting) {
                        setIntersecting(true);
                        observer.unobserve(ref.current);
                    }
                }
                entries.forEach((entry) => setIntersecting(entry.isIntersecting));
            },
            {
                rootMargin,
                threshold
            }
        );
        if (ref.current) observer.observe(ref.current);

        return () => observer.unobserve(ref.current);
    }, []);

    return isIntersecting;
}
