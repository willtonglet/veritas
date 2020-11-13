import clsx from 'clsx';

import Container from '@components/Container';
import Hamburger from '@components/Hamburger';

import styles from './styles.module.scss';
import { useState } from 'react';

interface Props {
    routes: Array<{
        route: string;
        name: string;
        website?: string;
    }>;
}

const Header: React.FC<Props> = ({ routes }) => {
    const [menuOpen, setIsMenuOpen] = useState(false);

    const renderMenu = (
        <ul>
            {routes.map((route, index) => (
                <li key={index}>
                    {route.website ? (
                        <a href={route.website} target="_blank" rel="noreferrer">
                            {route.name}
                        </a>
                    ) : (
                        <a href={route.route}>{route.name}</a>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <div className={styles.header__logo}>
                    <a href="/">
                        <img src="logo.svg" alt="Veritás - Vila Madalena" />
                    </a>
                </div>
                <div className={styles.header__menu}>{renderMenu}</div>
            </Container>
            <div className={styles.header__mobile}>
                <Hamburger
                    onClick={() => setIsMenuOpen(!menuOpen)}
                    className={styles.header__mobile__button}
                />
                <aside
                    className={clsx(
                        styles.header__mobile__drawer,
                        menuOpen && styles['header__mobile__drawer--open']
                    )}>
                    {renderMenu}
                </aside>
            </div>
            <div className={styles.header__loader} />
        </header>
    );
};

export default Header;
