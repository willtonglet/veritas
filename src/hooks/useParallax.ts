import { useState, useEffect } from 'react';

export default function useParallax(): Array<number> {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);

        return () => {
            if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);

    return [offset];
}
