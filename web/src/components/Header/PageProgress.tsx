import { useState, useMemo } from 'react';
import styles from './styles.module.scss';

const PageProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    function getVerticalScrollPercentage(elm: HTMLElement) {
        const p = elm.parentNode as HTMLElement;
        const pos = ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100;

        return pos;
    }

    useMemo(() => {
        if (typeof window !== 'undefined')
            window.addEventListener('scroll', () => {
                setProgress(getVerticalScrollPercentage(document.body));
            });

        return () => {
            if (typeof window !== 'undefined')
                window.removeEventListener('scroll', () => {
                    setProgress(getVerticalScrollPercentage(document.body));
                });
        };
    }, []);

    return (
        <div className={styles.progress}>
            <div className={styles.progress__bar} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default PageProgress;
