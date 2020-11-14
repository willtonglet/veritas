import { useState, useContext } from 'react';
import clsx from 'clsx';

import Container from '@components/Container';
import Hamburger from '@components/Hamburger';
import Context from 'context';

import styles from './styles.module.scss';

interface Props {
    routes: Array<{
        route?: string;
        name: string;
        website?: string;
    }>;
}

const Header: React.FC<Props> = ({ routes }) => {
    const [menuOpen, setIsMenuOpen] = useState(false);
    const { menuActive, setMenuActive } = useContext(Context);

    const handleActiveMenu = (active: number) => {
        setMenuActive(active);
        setIsMenuOpen(!menuOpen);
    };

    const renderMenu = (
        <ul>
            {routes.map((route, index) => (
                <li key={index}>
                    {route.website ? (
                        <a
                            href={route.website}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => handleActiveMenu(index)}>
                            {route.name}
                        </a>
                    ) : (
                        <a
                            href={route.route}
                            className={clsx(menuActive === index && styles.active)}
                            onClick={() => handleActiveMenu(index)}>
                            {route.name}
                        </a>
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
            <div className={styles.header__loader} />
            <div className={styles.header__mobile}>
                <Hamburger
                    isActive={menuOpen}
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
        </header>
    );
};

export default Header;
