import { useState, MouseEventHandler } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
    onClick?: MouseEventHandler;
    className?: string;
    isActive: boolean;
}

const Hamburger: React.FC<Props> = ({ onClick, className, isActive = false }) => {
    const [open, setIsOpen] = useState(isActive);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOpen(!open);
        onClick && onClick(e);
    };

    return (
        <div
            role="button"
            aria-hidden="true"
            className={clsx(styles.hamburger, isActive && styles.open, className)}
            onClick={handleClick}
            onKeyPress={handleClick as () => void}
            tabIndex={0}>
            <div className={styles['icon-left']} />
            <div className={styles['icon-right']} />
        </div>
    );
};

export default Hamburger;
