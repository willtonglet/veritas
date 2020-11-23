import { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
    onClick?: React.MouseEventHandler;
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
            <div className={styles['icon-left']} aria-hidden="true" />
            <div className={styles['icon-right']} aria-hidden="true" />
        </div>
    );
};

export default Hamburger;
