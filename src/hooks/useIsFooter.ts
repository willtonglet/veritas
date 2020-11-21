import { useState, useEffect } from 'react';

export default function useIsFooter(): Array<boolean> {
    const [isFooter, setIsFooter] = useState(false);

    const handleIsFooter = () =>
        setIsFooter(window.innerHeight + window.scrollY >= document.body.offsetHeight);

    useEffect(() => {
        document.addEventListener('scroll', handleIsFooter);
        return () => document.removeEventListener('scroll', handleIsFooter);
    }, []);

    return [isFooter];
}
